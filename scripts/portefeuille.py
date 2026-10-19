# Usage : python3 scripts/portefeuille.py "portfolio.csv"
# Mettre à jour EURUSD et ASOF ci-dessous, et META pour toute nouvelle ligne.
import csv, json, sys
from datetime import date
from collections import defaultdict

SRC = sys.argv[1]  # export CSV du suivi de portefeuille
OUT = sys.argv[2] if len(sys.argv) > 2 else "src/data/portefeuille.js"
EURUSD = 1.1227          # clôture BCE/marché du 19/10/2026
ASOF = date(2026, 10, 19)
WINDOW_START = date(2025, 10, 20)

META = {
 "HIMS": ("Hims & Hers Health", "Santé"),
 "QXO": ("QXO", "Industrie & énergie"),
 "VIK": ("Viking Holdings", "Consommation"),
 "FIGS": ("FIGS", "Consommation"),
 "FIG": ("Figma", "Logiciel"),
 "0P0001DKPM.F": ("Indépendance AM Europe Small", "Fonds & ETF"),
 "ESE.PA": ("BNP Paribas Easy S&P 500", "Fonds & ETF"),
 "STRL": ("Sterling Infrastructure", "Industrie & énergie"),
 "BE": ("Bloom Energy", "Industrie & énergie"),
 "TSLA": ("Tesla", "Consommation"),
 "PLTR": ("Palantir", "Logiciel"),
 "ASML": ("ASML", "Semi-conducteurs & réseaux"),
 "MSCI": ("MSCI", "Services financiers"),
 "RKLB": ("Rocket Lab", "Industrie & énergie"),
 "AMD": ("AMD", "Semi-conducteurs & réseaux"),
 "BBIO": ("BridgeBio Pharma", "Santé"),
 "GRAB": ("Grab Holdings", "Internet & plateformes"),
 "INTC": ("Intel", "Semi-conducteurs & réseaux"),
 "TOST": ("Toast", "Logiciel"),
 "CAVA": ("Cava Group", "Consommation"),
 "ONON": ("On Holding", "Consommation"),
 "DUOL": ("Duolingo", "Internet & plateformes"),
 "MNDY": ("monday.com", "Logiciel"),
 "UBER": ("Uber", "Internet & plateformes"),
 "VRTX": ("Vertex Pharmaceuticals", "Santé"),
 "AXON": ("Axon Enterprise", "Industrie & énergie"),
 "ANET": ("Arista Networks", "Semi-conducteurs & réseaux"),
 "ALNY": ("Alnylam Pharmaceuticals", "Santé"),
 "DIS": ("Disney", "Médias & divertissement"),
 "SBUX": ("Starbucks", "Consommation"),
 "TTWO": ("Take-Two Interactive", "Médias & divertissement"),
 "CRM": ("Salesforce", "Logiciel"),
 "MDB": ("MongoDB", "Logiciel"),
 "ISRG": ("Intuitive Surgical", "Santé"),
 "CMG": ("Chipotle", "Consommation"),
 "META": ("Meta Platforms", "Internet & plateformes"),
 "GOOG": ("Alphabet", "Internet & plateformes"),
 "SHOP": ("Shopify", "Internet & plateformes"),
 "HUBS": ("HubSpot", "Logiciel"),
 "TTD": ("The Trade Desk", "Logiciel"),
 "ROKU": ("Roku", "Médias & divertissement"),
 "NFLX": ("Netflix", "Médias & divertissement"),
 "NVDA": ("Nvidia", "Semi-conducteurs & réseaux"),
 "AMZN": ("Amazon", "Internet & plateformes"),
 "MELI": ("MercadoLibre", "Internet & plateformes"),
}
EUR = {"0P0001DKPM.F", "ESE.PA"}
DISPLAY = {"0P0001DKPM.F": "OPCVM", "ESE.PA": "ESE"}

def d(s): s=str(s); return date(int(s[:4]), int(s[4:6]), int(s[6:]))

rows = list(csv.DictReader(open(SRC, encoding="utf-8-sig")))
lots = defaultdict(list)
price = {}
for r in rows:
    t = r["Symbol"]; price[t] = float(r["Current Price"])
    lots[t].append(dict(date=d(r["Trade Date"]), px=float(r["Purchase Price"]),
                        qty=float(r["Quantity"]), side=r["Transaction Type"]))

holdings = []
for t, ls in lots.items():
    qty = sum(l["qty"] * (1 if l["side"]=="BUY" else -1) for l in ls)
    if qty <= 0: continue
    buys = [l for l in ls if l["side"]=="BUY"]
    cost = sum(l["qty"]*l["px"] for l in buys); bq = sum(l["qty"] for l in buys)
    pru = cost/bq; p = price[t]
    val_eur = qty*p/(1 if t in EUR else EURUSD)
    first = min(l["date"] for l in buys)
    holdings.append(dict(t=t, val=val_eur, perf=p/pru-1, first=first,
                         lots=len(buys), cost_eur=cost/(1 if t in EUR else EURUSD)))
tot = sum(h["val"] for h in holdings)
tot_cost = sum(h["cost_eur"] for h in holdings)

positions = []
for h in sorted(holdings, key=lambda h: -h["val"]):
    name, sector = META[h["t"]]
    positions.append(dict(ticker=DISPLAY.get(h["t"], h["t"]), name=name, sector=sector,
        weight=round(100*h["val"]/tot, 2), invested=round(100*h["cost_eur"]/tot_cost, 2),
        perf=round(100*h["perf"], 1),
        since=h["first"].isoformat(), devise="EUR" if h["t"] in EUR else "USD"))

# Mouvements des 12 derniers mois
moves = []
for t, ls in lots.items():
    name, _ = META[t]
    ls_sorted = sorted(ls, key=lambda l: l["date"])
    for i, l in enumerate(ls_sorted):
        if l["date"] < WINDOW_START: continue
        p = price[t]
        if l["side"] == "SELL":
            buys = [b for b in ls_sorted if b["side"]=="BUY" and b["date"] < l["date"]]
            bc = sum(b["qty"]*b["px"] for b in buys)/sum(b["qty"] for b in buys)
            held = sum(b["qty"] for b in ls_sorted if b["side"]=="BUY") - sum(b["qty"] for b in ls_sorted if b["side"]=="SELL")
            moves.append(dict(date=l["date"].isoformat(), type="Sortie" if held<=0 else "Allègement",
                ticker=DISPLAY.get(t,t), name=name, price=l["px"],
                realized=round(100*(l["px"]/bc-1),1), heldSince=min(b["date"] for b in buys).isoformat(),
                since=round(100*(p/l["px"]-1),1)))
        else:
            earlier = [b for b in ls_sorted if b["side"]=="BUY" and b["date"] < l["date"]]
            moves.append(dict(date=l["date"].isoformat(),
                type="Nouvelle tranche" if earlier else "Nouvelle ligne",
                ticker=DISPLAY.get(t,t), name=name, price=l["px"],
                since=round(100*(p/l["px"]-1),1)))
moves.sort(key=lambda m: m["date"], reverse=True)

# Répartition sectorielle
sectors = defaultdict(float)
for p in positions: sectors[p["sector"]] += p["weight"]
sectors = [dict(name=k, weight=round(v,1)) for k,v in sorted(sectors.items(), key=lambda kv:-kv[1])]

data = dict(asOf=ASOF.isoformat(), eurusd=EURUSD, windowStart=WINDOW_START.isoformat(),
    lines=len(positions), globalPerf=round(100*(tot/tot_cost-1),0),
    top10=round(sum(p["weight"] for p in positions[:10]),1),
    oldest=min(h["first"] for h in holdings).isoformat(),
    positions=positions, moves=moves, sectors=sectors)

js = ("// Suivi du portefeuille 221 Bourse — généré depuis l'export CSV du suivi de portefeuille.\n"
      "// AUCUN montant, aucune quantité : uniquement des poids (%), des performances (%) et des dates.\n"
      "// Pour mettre à jour : relancer le script de génération sur le nouvel export.\n"
      "export const PORTEFEUILLE = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")
open(OUT, "w").write(js)
print(json.dumps({k:v for k,v in data.items() if k not in ("positions","moves")}, ensure_ascii=False, indent=1))
for p in positions[:12]: print(p)
print("...")
for m in moves: print(m)

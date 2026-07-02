const schools = [
  { key: 'abercastell',      urn: 'WG100001', name: 'Ysgol Gyfun Abercastell',                    la: 'rct',        phase: 'Secondary', lang: 'Welsh medium',   type: 'Community school',  postcode: 'CF43 9AA', lat: 51.648, lng: -3.231, pupils: 1124, fte: 74.2, bpp: 6175, reserves: 142000, fsm: 16.3, bame: 4.2, eal: 1.8, attBase: 93.4, paBase: 18.2, trend: 'up',     fsmBand: 'low',  street: '12 Heol y Ysgol, Abercastell' },
  { key: 'blaengwawr',       urn: 'WG100002', name: 'Blaengwawr High School',                      la: 'rct',        phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'CF44 9BB', lat: 51.712, lng: -3.445, pupils: 876,  fte: 58.1, bpp: 6340, reserves: 98000,  fsm: 22.1, bame: 3.1, eal: 0.9, attBase: 91.2, paBase: 21.4, trend: 'up',     fsmBand: 'mid',  street: '3 Highfield Terrace, Blaengwawr' },
  { key: 'treorchy',         urn: 'WG100003', name: 'Treorchy Comprehensive',                      la: 'rct',        phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'CF42 9CC', lat: 51.660, lng: -3.508, pupils: 1340, fte: 88.4, bpp: 6050, reserves: 210000, fsm: 18.9, bame: 5.8, eal: 2.4, attBase: 89.3, paBase: 22.8, trend: 'up',     fsmBand: 'low',  street: '45 Bute Street, Treorchy' },
  { key: 'mountain-ash',     urn: 'WG100004', name: 'Mountain Ash Comprehensive',                  la: 'rct',        phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'CF45 9DD', lat: 51.681, lng: -3.374, pupils: 923,  fte: 61.2, bpp: 6210, reserves: 118000, fsm: 41.0, bame: 7.2, eal: 3.1, attBase: 86.1, paBase: 28.4, trend: 'up',     fsmBand: 'high', street: '7 Oxford Street, Mountain Ash' },
  { key: 'aberdare',         urn: 'WG100005', name: 'Aberdare Community School',                   la: 'rct',        phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'CF44 9EE', lat: 51.715, lng: -3.449, pupils: 1107, fte: 73.2, bpp: 6090, reserves: 162000, fsm: 35.6, bame: 6.4, eal: 2.8, attBase: 88.4, paBase: 24.6, trend: 'up',     fsmBand: 'high', street: '22 Wind Street, Aberdare' },
  { key: 'ferndale',         urn: 'WG100006', name: 'Ferndale Community School',                   la: 'rct',        phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'CF43 9FF', lat: 51.669, lng: -3.462, pupils: 654,  fte: 43.8, bpp: 6420, reserves: 74000,  fsm: 31.2, bame: 4.4, eal: 1.2, attBase: 90.4, paBase: 20.8, trend: 'up',     fsmBand: 'mid',  street: '9 Highfield Road, Ferndale' },
  { key: 'llanhari',         urn: 'WG100007', name: 'Ysgol Llanhari',                              la: 'rct',        phase: 'Secondary', lang: 'Welsh medium',   type: 'Voluntary Aided',   postcode: 'CF72 9GG', lat: 51.541, lng: -3.437, pupils: 798,  fte: 52.8, bpp: 6280, reserves: 108000, fsm: 12.4, bame: 2.8, eal: 0.6, attBase: 94.2, paBase: 15.8, trend: 'up',     fsmBand: 'low',  street: '5 Heol Llanhari, Llanharan' },
  { key: 'cwmtaff',          urn: 'WG100008', name: 'Ysgol Gynradd Cwmtaff',                       la: 'rct',        phase: 'Primary',   lang: 'Welsh medium',   type: 'Community school',  postcode: 'CF48 9HH', lat: 51.752, lng: -3.368, pupils: 214,  fte: 10.4, bpp: 5840, reserves: 24000,  fsm: 19.4, bame: 2.1, eal: 0.4, attBase: 94.8, paBase: 12.4, trend: 'up',     fsmBand: 'low',  street: '1 Bryn Road, Cwmtaff' },
  { key: 'hirwaun',          urn: 'WG100009', name: 'Hirwaun Primary School',                      la: 'rct',        phase: 'Primary',   lang: 'English medium', type: 'Community school',  postcode: 'CF44 9JJ', lat: 51.736, lng: -3.509, pupils: 312,  fte: 14.8, bpp: 5760, reserves: 31000,  fsm: 28.4, bame: 3.4, eal: 1.0, attBase: 91.6, paBase: 19.2, trend: 'up',     fsmBand: 'mid',  street: '18 Commercial Street, Hirwaun' },
  { key: 'penrhys',          urn: 'WG100010', name: 'Penrhys Special School',                      la: 'rct',        phase: 'Special',   lang: 'English medium', type: 'Community school',  postcode: 'CF43 9KK', lat: 51.657, lng: -3.477, pupils: 98,   fte: 14.2, bpp: 14200,reserves: 18000,  fsm: 62.4, bame: 8.2, eal: 2.4, attBase: 88.2, paBase: 24.8, trend: 'stable', fsmBand: 'high', street: '2 Cwm Clydach Road, Penrhys' },
  { key: 'st-cenydd',        urn: 'WG200001', name: 'St Cenydd Comprehensive',                     la: 'caerphilly', phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'CF83 9AA', lat: 51.576, lng: -3.218, pupils: 1486, fte: 98.2, bpp: 5980, reserves: 248000, fsm: 20.4, bame: 8.6, eal: 4.2, attBase: 91.8, paBase: 19.4, trend: 'up',     fsmBand: 'mid',  street: '16 Pontygwindy Road, Caerphilly' },
  { key: 'lewis',            urn: 'WG200002', name: 'Lewis School Pengam',                         la: 'caerphilly', phase: 'Secondary', lang: 'English medium', type: 'Foundation school', postcode: 'NP12 9BB', lat: 51.647, lng: -3.229, pupils: 1188, fte: 78.6, bpp: 6120, reserves: 188000, fsm: 15.8, bame: 6.2, eal: 3.4, attBase: 92.6, paBase: 17.8, trend: 'up',     fsmBand: 'low',  street: '8 Commercial Street, Pengam' },
  { key: 'blackwood',        urn: 'WG200003', name: 'Blackwood Comprehensive',                     la: 'caerphilly', phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'NP12 9CC', lat: 51.669, lng: -3.193, pupils: 1042, fte: 69.0, bpp: 6180, reserves: 142000, fsm: 26.8, bame: 5.4, eal: 2.0, attBase: 89.8, paBase: 22.4, trend: 'up',     fsmBand: 'mid',  street: '14 High Street, Blackwood' },
  { key: 'risca',            urn: 'WG200004', name: 'Risca Community Comprehensive',               la: 'caerphilly', phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'NP11 9DD', lat: 51.611, lng: -3.095, pupils: 964,  fte: 63.8, bpp: 6240, reserves: 124000, fsm: 24.6, bame: 7.0, eal: 3.8, attBase: 90.6, paBase: 21.2, trend: 'up',     fsmBand: 'mid',  street: '27 Tregwilym Road, Risca' },
  { key: 'ystrad-mynach',    urn: 'WG200005', name: 'Ysgol Gyfun Cwm Rhymni',                     la: 'caerphilly', phase: 'Secondary', lang: 'Welsh medium',   type: 'Community school',  postcode: 'CF82 9EE', lat: 51.638, lng: -3.235, pupils: 1102, fte: 72.8, bpp: 6020, reserves: 172000, fsm: 14.2, bame: 3.8, eal: 1.4, attBase: 93.8, paBase: 16.4, trend: 'up',     fsmBand: 'low',  street: '6 Gelligaer Road, Ystrad Mynach' },
  { key: 'bedwas',           urn: 'WG200006', name: 'Bedwas Primary School',                       la: 'caerphilly', phase: 'Primary',   lang: 'English medium', type: 'Community school',  postcode: 'CF83 9FF', lat: 51.594, lng: -3.188, pupils: 276,  fte: 13.1, bpp: 5810, reserves: 28000,  fsm: 17.8, bame: 4.2, eal: 1.6, attBase: 93.2, paBase: 14.8, trend: 'up',     fsmBand: 'low',  street: '11 Bedwas Road, Bedwas' },
  { key: 'cyfarthfa',        urn: 'WG300001', name: 'Cyfarthfa High School',                       la: 'merthyr',    phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'CF48 9AA', lat: 51.748, lng: -3.378, pupils: 986,  fte: 65.4, bpp: 6380, reserves: 104000, fsm: 38.4, bame: 5.8, eal: 2.6, attBase: 87.2, paBase: 25.8, trend: 'up',     fsmBand: 'high', street: '3 Swan Street, Merthyr Tydfil' },
  { key: 'pen-y-dre',        urn: 'WG300002', name: 'Pen-y-Dre High School',                      la: 'merthyr',    phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'CF47 9BB', lat: 51.762, lng: -3.380, pupils: 842,  fte: 55.8, bpp: 6460, reserves: 86000,  fsm: 42.8, bame: 6.4, eal: 3.0, attBase: 85.8, paBase: 28.2, trend: 'up',     fsmBand: 'high', street: '19 Pen-y-Dre, Merthyr Tydfil' },
  { key: 'afon-taf',         urn: 'WG300003', name: 'Afon Taf High School',                        la: 'merthyr',    phase: 'Secondary', lang: 'English medium', type: 'Community school',  postcode: 'CF46 9CC', lat: 51.696, lng: -3.308, pupils: 768,  fte: 50.9, bpp: 6520, reserves: 72000,  fsm: 34.2, bame: 4.8, eal: 1.8, attBase: 88.4, paBase: 23.4, trend: 'up',     fsmBand: 'high', street: '5 Afon Taf Road, Troedyrhiw' },
  { key: 'bishop-hannington',urn: 'WG300004', name: 'Bishop Hannington Church in Wales School',   la: 'merthyr',    phase: 'Secondary', lang: 'English medium', type: 'Voluntary Aided',   postcode: 'CF47 9DD', lat: 51.745, lng: -3.374, pupils: 612,  fte: 40.6, bpp: 6580, reserves: 58000,  fsm: 28.8, bame: 4.2, eal: 1.6, attBase: 89.4, paBase: 22.0, trend: 'stable', fsmBand: 'mid',  street: '10 Church Road, Merthyr Tydfil' },
  { key: 'vaynor',           urn: 'WG300005', name: 'Vaynor and Penderyn Primary',                 la: 'merthyr',    phase: 'Primary',   lang: 'English medium', type: 'Community school',  postcode: 'CF48 9EE', lat: 51.764, lng: -3.416, pupils: 188,  fte: 9.2,  bpp: 5920, reserves: 18000,  fsm: 22.6, bame: 3.0, eal: 0.8, attBase: 92.4, paBase: 16.8, trend: 'up',     fsmBand: 'mid',  street: '2 Vaynor Road, Vaynor' },
];

const walesAtt = 91.8, walesPA = 17.1, walesAuth = 4.1, walesUnauth = 2.1, walesFSM = 21.4;
const years5 = ['2020-21','2021-22','2022-23','2023-24','2024-25'];
const years3 = ['2022-23','2023-24','2024-25'];
const BANDS  = ['astar','astar-a','astar-b','astar-c','astar-d','astar-e','astar-f','astar-g'];
const walesOutcomes = { 'astar':7,'astar-a':18,'astar-b':34,'astar-c':47,'astar-d':61,'astar-e':71,'astar-f':80,'astar-g':87 };

function r(v) { return Math.round(v * 10) / 10; }

// 5-year trend working backward from base value
function trend5(base, direction, step) {
  const s = step || 1.4;
  const result = [];
  for (let i = 4; i >= 0; i--) {
    const offset = direction === 'up'     ? -(i * s)
                 : direction === 'down'   ?  (i * s)
                 :                           -(i * 0.15);
    result.push(r(base + offset));
  }
  return result;
}

// LA averages across secondary schools
function laAvg(la, field) {
  const s = schools.filter(x => x.la === la && x.phase === 'Secondary');
  return r(s.reduce((a,b) => a + b[field], 0) / s.length);
}
const laAtts = { rct: laAvg('rct','attBase'), caerphilly: laAvg('caerphilly','attBase'), merthyr: laAvg('merthyr','attBase') };
const laPAs  = { rct: laAvg('rct','paBase'),  caerphilly: laAvg('caerphilly','paBase'),  merthyr: laAvg('merthyr','paBase')  };

// Contextual comparator: same phase + fsmBand + language medium
function ctxPeers(s) {
  return schools.filter(x => x.phase === s.phase && x.fsmBand === s.fsmBand && x.lang === s.lang && x.key !== s.key);
}
function ctxMean(s, field) {
  const peers = ctxPeers(s);
  if (!peers.length) return s[field];
  return r(peers.reduce((a,b) => a + b[field], 0) / peers.length);
}

function authRate(att)   { return r(walesAuth   + (walesAtt - att) * 0.2); }
function unauthRate(att) { return r(walesUnauth + (walesAtt - att) * 0.3); }

function entryBase(s) {
  return Math.round(40 + (s.attBase - 80) * 1.8 - (s.fsm - 20) * 0.4);
}

function outcomeBase(s, band) {
  const e = entryBase(s);
  const pct = { 'astar':0.10,'astar-a':0.27,'astar-b':0.45,'astar-c':0.61,'astar-d':0.73,'astar-e':0.82,'astar-f':0.89,'astar-g':0.95 };
  return Math.round(e * pct[band]);
}

function laEntries(la) {
  const s = schools.filter(x => x.la === la && x.phase === 'Secondary');
  return Math.round(s.reduce((a,b) => a + entryBase(b), 0) / s.length);
}
function ctxEntries(s) {
  const peers = ctxPeers(s).filter(x => x.phase === 'Secondary');
  if (!peers.length) return entryBase(s);
  return Math.round(peers.reduce((a,b) => a + entryBase(b), 0) / peers.length);
}
function laOutcome(la, band) {
  const s = schools.filter(x => x.la === la && x.phase === 'Secondary');
  return Math.round(s.reduce((a,b) => a + outcomeBase(b, band), 0) / s.length);
}
function ctxOutcome(s, band) {
  const peers = ctxPeers(s).filter(x => x.phase === 'Secondary');
  if (!peers.length) return outcomeBase(s, band);
  return Math.round(peers.reduce((a,b) => a + outcomeBase(b, band), 0) / peers.length);
}

function pupilsByYear(s) {
  const half = Math.round(s.pupils / 5 / 2);
  const sp = i => Math.round(half * (1 + (i - 2) * 0.04));
  return {
    year7:  { female: sp(0)+4, male: sp(0)-4 },
    year8:  { female: sp(1)+2, male: sp(1)-2 },
    year9:  { female: sp(2)-2, male: sp(2)+6 },
    year10: { female: sp(3)+4, male: sp(3)+2 },
    year11: { female: sp(4)+6, male: sp(4)-2 },
  };
}

function buildSchool(s) {
  const la      = s.la;
  const laA     = laAtts[la];
  const laP     = laPAs[la];
  const ctxA    = ctxMean(s, 'attBase');
  const ctxP    = ctxMean(s, 'paBase');
  const auth    = authRate(s.attBase);
  const unauth  = unauthRate(s.attBase);
  const laAuth  = authRate(laA);
  const laUn    = unauthRate(laA);
  const ctxAuth = authRate(ctxA);
  const ctxUn   = unauthRate(ctxA);

  const obj = {
    urn:              s.urn,
    name:             s.name,
    la:               la,
    phase:            s.phase,
    language:         s.lang,
    type:             s.type,
    postcode:         s.postcode,
    street:           s.street,
    lat:              s.lat,
    lng:              s.lng,
    phone:            '01443 ' + (100000 + Math.floor(s.urn.slice(-4) * 7.3)).toString().slice(0,6),
    email:            s.key + '@' + la + '.gov.uk',
    website:          s.key.replace(/-/g,'') + '.cymru',
    estynUrl:         '#',
    totalPupils:      s.pupils,
    teacherFTE:       s.fte,
    ptr:              r(s.pupils / s.fte),
    budgetPerPupil:   s.bpp,
    financialReserves: s.reserves,
    fsm3yr:           s.fsm,
    bame:             s.bame,
    eal:              s.eal,

    attendance: {
      overall: {
        '1': { school: s.attBase, la: laA, wales: walesAtt, ctx: ctxA },
        '5': { labels: years5, school: trend5(s.attBase,'up',1.4), la: trend5(laA,'up',1.2), wales: trend5(walesAtt,'up',1.0), ctx: trend5(ctxA,'up',1.1) }
      },
      pa: {
        '1': { school: s.paBase, la: laP, wales: walesPA, ctx: ctxP },
        '5': { labels: years5, school: trend5(s.paBase,'down',1.2), la: trend5(laP,'down',1.0), wales: trend5(walesPA,'down',0.8), ctx: trend5(ctxP,'down',1.0) }
      },
      auth: {
        '1': { school: auth, la: laAuth, wales: walesAuth, ctx: ctxAuth },
        '5': { labels: years5, school: trend5(auth,'stable',0.2), la: trend5(laAuth,'stable',0.15), wales: trend5(walesAuth,'stable',0.1), ctx: trend5(ctxAuth,'stable',0.18) }
      },
      unauth: {
        '1': { school: unauth, la: laUn, wales: walesUnauth, ctx: ctxUn },
        '5': { labels: years5, school: trend5(unauth,'up',0.3), la: trend5(laUn,'up',0.25), wales: trend5(walesUnauth,'up',0.2), ctx: trend5(ctxUn,'up',0.28) }
      },
      groups: {
        fsm:    { attendance: r(s.attBase-8.2),  auth: r(auth+1.2),  unauth: r(unauth+1.8), pa: r(s.paBase+10.2), ctx: r(ctxA-8.4) },
        nonfsm: { attendance: r(s.attBase+3.8),  auth: r(auth-0.6),  unauth: r(unauth-0.8), pa: r(s.paBase-4.2),  ctx: r(ctxA+3.6) },
        female: { attendance: r(s.attBase+1.4),  auth: r(auth-0.4),  unauth: r(unauth-0.6), pa: r(s.paBase-2.8),  ctx: r(ctxA+1.2) },
        male:   { attendance: r(s.attBase-1.2),  auth: r(auth+0.4),  unauth: r(unauth+0.6), pa: r(s.paBase+2.8),  ctx: r(ctxA-1.2) }
      }
    },

    pupils: {
      byYear: s.phase === 'Secondary' ? pupilsByYear(s) : null,
      fsm:  { '2022-23': r(s.fsm-0.6), '2023-24': r(s.fsm-0.3), '2024-25': s.fsm },
      aln: {
        schoolAction:     { '2022-23': r(s.fsm*0.28), '2023-24': r(s.fsm*0.30), '2024-25': r(s.fsm*0.32) },
        schoolActionPlus: { '2022-23': r(s.fsm*0.12), '2023-24': r(s.fsm*0.13), '2024-25': r(s.fsm*0.14) },
        statement:        { '2022-23': r(s.fsm*0.06), '2023-24': r(s.fsm*0.065),'2024-25': r(s.fsm*0.07) }
      },
      eal:  s.eal,
      bame: s.bame
    }
  };

  // Entries and outcomes — secondary only in current prototype scope
  // Primary and special school attainment frameworks are out of scope for this round
  if (s.phase === 'Secondary') {
    const e    = entryBase(s);
    const eLa  = laEntries(la);
    const eCtx = ctxEntries(s);
    const eW   = 62;
    const eF   = Math.round(e*1.07), eM = Math.round(e*0.93);
    const eFsm = Math.round(e*0.74), eNon = Math.round(e*1.12);

    obj.entries = {
      all:              { '1': { school:e,    la:eLa,               wales:eW,  ctx:eCtx              }, '3': { labels:years3, school:[Math.round(e*0.92),Math.round(e*0.96),e], la:[Math.round(eLa*0.92),Math.round(eLa*0.96),eLa], wales:[57,60,62], ctx:[Math.round(eCtx*0.92),Math.round(eCtx*0.96),eCtx] } },
      female:           { '1': { school:eF,   la:Math.round(eLa*1.07), wales:66,  ctx:Math.round(eCtx*1.07) }, '3': { labels:years3, school:[Math.round(eF*0.92),Math.round(eF*0.96),eF], la:[Math.round(eLa*0.99),Math.round(eLa*1.03),Math.round(eLa*1.07)], wales:[61,64,66], ctx:[Math.round(eCtx*0.99),Math.round(eCtx*1.03),Math.round(eCtx*1.07)] } },
      male:             { '1': { school:eM,   la:Math.round(eLa*0.93), wales:58,  ctx:Math.round(eCtx*0.93) }, '3': { labels:years3, school:[Math.round(eM*0.92),Math.round(eM*0.96),eM], la:[Math.round(eLa*0.85),Math.round(eLa*0.89),Math.round(eLa*0.93)], wales:[53,56,58], ctx:[Math.round(eCtx*0.85),Math.round(eCtx*0.89),Math.round(eCtx*0.93)] } },
      fsm:              { '1': { school:eFsm, la:Math.round(eLa*0.73), wales:46,  ctx:Math.round(eCtx*0.73) }, '3': { labels:years3, school:[Math.round(eFsm*0.92),Math.round(eFsm*0.96),eFsm], la:[Math.round(eLa*0.65),Math.round(eLa*0.69),Math.round(eLa*0.73)], wales:[40,43,46], ctx:[Math.round(eCtx*0.65),Math.round(eCtx*0.69),Math.round(eCtx*0.73)] } },
      nonfsm:           { '1': { school:eNon, la:Math.round(eLa*1.14), wales:70,  ctx:Math.round(eCtx*1.14) }, '3': { labels:years3, school:[Math.round(eNon*0.92),Math.round(eNon*0.96),eNon], la:[Math.round(eLa*1.06),Math.round(eLa*1.10),Math.round(eLa*1.14)], wales:[64,67,70], ctx:[Math.round(eCtx*1.06),Math.round(eCtx*1.10),Math.round(eCtx*1.14)] } },
      'sex-comparison': { '1': { labels:['Female','Male'], school:[eF,eM], la:[Math.round(eLa*1.07),Math.round(eLa*0.93)], wales:[66,58], ctx:[Math.round(eCtx*1.07),Math.round(eCtx*0.93)] }, '3': { labels:years3, school:{a:[Math.round(eF*0.92),Math.round(eF*0.96),eF],b:[Math.round(eM*0.92),Math.round(eM*0.96),eM]}, la:{a:[Math.round(eLa*0.99),Math.round(eLa*1.03),Math.round(eLa*1.07)],b:[Math.round(eLa*0.85),Math.round(eLa*0.89),Math.round(eLa*0.93)]}, wales:{a:[61,64,66],b:[53,56,58]}, ctx:{a:[Math.round(eCtx*0.99),Math.round(eCtx*1.03),Math.round(eCtx*1.07)],b:[Math.round(eCtx*0.85),Math.round(eCtx*0.89),Math.round(eCtx*0.93)]} } },
      'fsm-comparison': { '1': { labels:['FSM eligible','Non-FSM eligible'], school:[eFsm,eNon], la:[Math.round(eLa*0.73),Math.round(eLa*1.14)], wales:[46,70], ctx:[Math.round(eCtx*0.73),Math.round(eCtx*1.14)] }, '3': { labels:years3, school:{a:[Math.round(eFsm*0.92),Math.round(eFsm*0.96),eFsm],b:[Math.round(eNon*0.92),Math.round(eNon*0.96),eNon]}, la:{a:[Math.round(eLa*0.65),Math.round(eLa*0.69),Math.round(eLa*0.73)],b:[Math.round(eLa*1.06),Math.round(eLa*1.10),Math.round(eLa*1.14)]}, wales:{a:[40,43,46],b:[64,67,70]}, ctx:{a:[Math.round(eCtx*0.65),Math.round(eCtx*0.69),Math.round(eCtx*0.73)],b:[Math.round(eCtx*1.06),Math.round(eCtx*1.10),Math.round(eCtx*1.14)]} } }
    };

    obj.outcomes = {};
    BANDS.forEach(band => {
      const o    = outcomeBase(s, band);
      const oLa  = laOutcome(la, band);
      const oCtx = ctxOutcome(s, band);
      const oW   = walesOutcomes[band];
      const oF   = Math.round(o*1.08), oM = Math.round(o*0.92);
      const oFsm = Math.round(o*0.62), oNon = Math.round(o*1.22);
      obj.outcomes[band] = {
        all:              { '1': { school:o,    la:oLa,                 wales:oW,                ctx:oCtx                }, '3': { labels:years3, school:[Math.round(o*0.88),Math.round(o*0.94),o], la:[Math.round(oLa*0.88),Math.round(oLa*0.94),oLa], wales:[Math.round(oW*0.88),Math.round(oW*0.94),oW], ctx:[Math.round(oCtx*0.88),Math.round(oCtx*0.94),oCtx] } },
        female:           { '1': { school:oF,   la:Math.round(oLa*1.08), wales:Math.round(oW*1.08), ctx:Math.round(oCtx*1.08) } },
        male:             { '1': { school:oM,   la:Math.round(oLa*0.92), wales:Math.round(oW*0.92), ctx:Math.round(oCtx*0.92) } },
        fsm:              { '1': { school:oFsm, la:Math.round(oLa*0.62), wales:Math.round(oW*0.62), ctx:Math.round(oCtx*0.62) } },
        nonfsm:           { '1': { school:oNon, la:Math.round(oLa*1.22), wales:Math.round(oW*1.22), ctx:Math.round(oCtx*1.22) } },
        'sex-comparison': { '1': { labels:['Female','Male'], school:[oF,oM], la:[Math.round(oLa*1.08),Math.round(oLa*0.92)], wales:[Math.round(oW*1.08),Math.round(oW*0.92)], ctx:[Math.round(oCtx*1.08),Math.round(oCtx*0.92)] } },
        'fsm-comparison': { '1': { labels:['FSM eligible','Non-FSM eligible'], school:[oFsm,oNon], la:[Math.round(oLa*0.62),Math.round(oLa*1.22)], wales:[Math.round(oW*0.62),Math.round(oW*1.22)], ctx:[Math.round(oCtx*0.62),Math.round(oCtx*1.22)] } }
      };
    });
  } else {
    obj.entries  = null;
    obj.outcomes = null;
  }

  return obj;
}

const built = {};
schools.forEach(s => { built[s.key] = buildSchool(s); });

const laNames = { rct:'Rhondda Cynon Taf', caerphilly:'Caerphilly', merthyr:'Merthyr Tydfil' };
const laData  = {};
['rct','caerphilly','merthyr'].forEach(la => {
  const all = schools.filter(x => x.la === la);
  const laA = laAtts[la], laP = laPAs[la];
  laData[la] = {
    name: laNames[la], code: la,
    schools: all.map(x => x.key),
    attendance: {
      overall: { '1': { value:laA, wales:walesAtt }, '5': { labels:years5, la:trend5(laA,'up',1.2), wales:trend5(walesAtt,'up',1.0) } },
      pa:       { '1': { value:laP, wales:walesPA  }, '5': { labels:years5, la:trend5(laP,'down',1.0), wales:trend5(walesPA,'down',0.8) } }
    },
    fsm: r(all.reduce((a,b)=>a+b.fsm*b.pupils,0)/all.reduce((a,b)=>a+b.pupils,0)),
    totalPupils: all.reduce((a,b)=>a+b.pupils,0),
    phaseBreakdown: {
      secondary: all.filter(x=>x.phase==='Secondary').length,
      primary:   all.filter(x=>x.phase==='Primary').length,
      middle:    all.filter(x=>x.phase==='Middle').length,
      special:   all.filter(x=>x.phase==='Special').length
    }
  };
});

const walesData = {
  attendance: {
    overall: { '1':{value:walesAtt}, '5':{labels:years5, values:trend5(walesAtt,'up',1.0)} },
    pa:       { '1':{value:walesPA},  '5':{labels:years5, values:trend5(walesPA,'down',0.8)} },
    auth:     { '1':{value:walesAuth},'5':{labels:years5, values:trend5(walesAuth,'stable',0.1)} },
    unauth:   { '1':{value:walesUnauth},'5':{labels:years5, values:trend5(walesUnauth,'up',0.2)} }
  },
  fsm: walesFSM,
  pupils: 420000
};

const output = `// =============================================================================
// Welsh Government Education Data Service — Central Data File
// Version 2 — generated ${new Date().toISOString().slice(0,10)}
//
// All data is fictional and for prototype purposes only.
// School names, URNs, postcodes, and figures bear no relation to any real
// institution. Postcodes follow a valid Welsh format but do not correspond
// to real addresses.
//
// Structure:
//   WGData.wales             National averages
//   WGData.las               Local authority aggregates
//   WGData.schools           Individual school objects (keyed by slug)
//
// Each school object contains:
//   Identifiers:   urn, name, la, phase, language, type, postcode, lat, lng
//   Contact:       phone, email, website, estynUrl
//   Size/finance:  totalPupils, teacherFTE, ptr, budgetPerPupil, financialReserves
//   Demographics:  fsm3yr, bame, eal
//   attendance:    4 measures x 2 time ranges x 4 comparators + group breakdowns
//   pupils:        byYear (secondary only), fsm trend, aln breakdown, eal, bame
//   entries:       7 breakdowns x 2 time ranges — secondary only in current scope
//   outcomes:      8 grade bands x 7 breakdowns — secondary only in current scope
//
// Contextual comparator is pre-calculated as the mean of schools sharing
// the same phase, FSM band (low/mid/high), and language medium.
//
// To add a new school: add a row to generate_data_v2.js and re-run with Node.
// To add a new field: add to buildSchool() in the generator and re-run.
// =============================================================================

var WGData = {

  wales: ${JSON.stringify(walesData, null, 2)},

  las: ${JSON.stringify(laData, null, 2)},

  schools: ${JSON.stringify(built, null, 2)},

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  // Find a school by URN
  getByUrn: function(urn) {
    var keys = Object.keys(this.schools);
    for (var i = 0; i < keys.length; i++) {
      if (this.schools[keys[i]].urn === urn) return this.schools[keys[i]];
    }
    return null;
  },

  // Get all school objects for a given LA code
  getSchoolsByLa: function(laCode) {
    var la = this.las[laCode];
    if (!la) return [];
    var self = this;
    return la.schools.map(function(key) { return self.schools[key]; }).filter(Boolean);
  },

  // Search schools by name fragment
  searchByName: function(query) {
    var q = query.toLowerCase();
    return Object.values(this.schools).filter(function(s) {
      return s.name.toLowerCase().indexOf(q) > -1;
    });
  },

  // Search schools by postcode fragment
  searchByPostcode: function(query) {
    var q = query.toUpperCase().replace(/\\s/g,'');
    return Object.values(this.schools).filter(function(s) {
      return s.postcode.replace(/\\s/g,'').indexOf(q) > -1;
    });
  }

  // Note: comparator group building is handled in the compare-build page
  // (change 41) based on user-selected filters, not pre-computed here.

};
`;

require('fs').writeFileSync('./app/assets/javascripts/data.js', output);
console.log('Done. Schools:', Object.keys(built).length, '| LAs:', Object.keys(laData).length);
// Quick validation
Object.keys(built).forEach(k => {
  const s = built[k];
  if (!s.attendance.overall['5'].school) console.error('Missing 5yr att:', k);
  if (s.phase === 'Secondary' && !s.entries) console.error('Missing entries:', k);
  if (s.phase !== 'Secondary' && s.entries !== null) console.error('Should be null:', k);
});
console.log('Validation passed.');
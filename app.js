const HUNGARIAN_CITY_DATA = {
  "Budapest": {
    transport: "BKK járatok, HÉV és MÁV-Volán (65 év felett személyi igazolvánnyal díjmentes!)",
    tripTarget: "Szentendre (H5-ös HÉV-vel), Gödöllői Királyi Kastély vagy Margitszigeti séta",
    bath: "Széchenyi, Lukács vagy Dandár Gyógyfürdő (TB-támogatott fürdőgyógyászati lehetőségek)",
    market: "Vásárcsarnok, kerületi piacok és Kormányablak ügyintézés"
  },
  "Debrecen": {
    transport: "DKV villamosok és buszok, valamint MÁV-Volán (65+ díjmentes utazás)",
    tripTarget: "Nagyerdő, Békás-tó körüli kényelmes séta, Hortobágy vagy Hajdúszoboszlói fürdőzés",
    bath: "Aquaticum Termálfürdő és Hajdúszoboszlói Gyógyfürdő",
    market: "Debreceni Nagypiac, Kenézy / Klinikai Központ szakrendelések"
  },
  "Szeged": {
    transport: "SZKT trolibuszok, villamosok, Szeged-Hódmezővásárhely Tram-Train és MÁV-Volán (65+ díjmentes)",
    tripTarget: "Ópusztaszeri Nemzeti Történeti Emlékpark, Gyulai Várfürdő vagy Tisza-parti séta",
    bath: "Anna Gyógy-, Termál- és Élményfürdő, Napfényfürdő Aquapolis",
    market: "Mars téri piac, Szegedi Tudományegyetem klinikák és szakrendelők"
  },
  "Miskolc": {
    transport: "MVK buszok és villamosok, Lillafüredi kisvasút és MÁV-Volán (65+ díjmentes)",
    tripTarget: "Lillafüred (Hámori-tó, Függőkert), Miskolctapolca vagy Eger",
    bath: "Miskolctapolcai fürdők, Selyemréti Strandfürdő és Zsóry Gyógyfürdő (Mezőkövesd)",
    market: "Búza téri vásárcsarnok, megyei szakrendelők"
  },
  "Pécs": {
    transport: "Tüke Busz helyi járatok és MÁV-Volánbusz (65+ díjmentes utazás)",
    tripTarget: "Harkányi Gyógyfürdő, Villány, Orfűi-tó vagy a pécsi Zsolnay Kulturális Negyed",
    bath: "Harkányi Gyógy- és Strandfürdő, Siklósi Termálfürdő",
    market: "Pécsi Vásárcsarnok, PTE Klinikai Központ szakrendelések"
  },
  "Győr": {
    transport: "Győri helyi autóbuszok és MÁV-Volán járatok (65+ díjmentes)",
    tripTarget: "Pannonhalmi Főapátság, Mosonmagyaróvár vagy Tata (Öreg-tó)",
    bath: "Rába Quelle Gyógy-, Termál- és Élményfürdő, Lipóti Termálfürdő",
    market: "Győri Vásárcsarnok, Petz Aladár Egyetemi Oktató Kórház szakrendelők"
  },
  "Székesfehérvár": {
    transport: "Helyi autóbuszjáratok és MÁV-Volán (Velencei-tó és Budapest irányába 65+ díjmentes)",
    tripTarget: "Agárdi Gyógyfürdő, Velencei-tó parti séta, Bory-vár vagy Veszprém",
    bath: "Árpád Fürdő (Székesfehérvár) és Agárdi Gyógy- és Termálfürdő",
    market: "Városi Piac, Szent György Kórház szakrendelések"
  },
  "Kecskemét": {
    transport: "KEKO helyi buszok és MÁV-Volán járatok (65+ díjmentes)",
    tripTarget: "Kiskunmajsa (Jonathermál), Tiszakécske (Tisza-parti Gyógyfürdő) vagy Kecskeméti Arborétum",
    bath: "Kecskeméti Fürdő és Tiszakécskei Gyógyfürdő",
    market: "Kecskeméti Városi Piac, megyei szakrendelő"
  },
  "Nyíregyháza": {
    transport: "Helyi autóbuszok és MÁV-Volán (65+ díjmentes)",
    tripTarget: "Sóstógyógyfürdő, Nyíregyházi Állatpark, Múzeumfalu vagy Tokaj",
    bath: "Aquarius Élmény- és Parkfürdő (Sóstógyógyfürdő)",
    market: "Búza téri piac, Jósa András Oktatókórház szakrendelők"
  },
  "Szombathely": {
    transport: "Blaguss helyi buszok, GYSEV és Volánbusz (65+ díjmentes)",
    tripTarget: "Kőszeg történelmi belvárosa, Sárvári Gyógyfürdő vagy Bükfürdő",
    bath: "Bükfürdő Thermal & Spa, Sárvári Gyógy- és Wellnessfürdő",
    market: "Szombathelyi Vásárcsarnok, Markusovszky Kórház szakrendelők"
  },
  "Veszprém": {
    transport: "V-Busz helyi járatok és MÁV-Volán (65+ díjmentes)",
    tripTarget: "Balatonfüred (Tagore-sétány), Tihanyi Apátság vagy Hévízi Tófürdő",
    bath: "Balatonfüredi Szívkórház / fürdők, Hévízi Gyógytó és Pápa (Várkertfürdő)",
    market: "Veszprémi Vásárcsarnok, Csolnoky Ferenc Kórház szakrendelések"
  },
  "Eger": {
    transport: "Helyi járatok és MÁV-Volánbusz (65+ díjmentes)",
    tripTarget: "Egerszalók, Demjén, Szilvásvárad (Szalajka-völgy kisvasúttal) vagy Egri Vár",
    bath: "Egri Termál- és Strandfürdő, Török Fürdő, Egerszalóki Gyógyfürdő",
    market: "Egri Katona téri Vásárcsarnok, Markhot Ferenc Kórház szakrendelők"
  }
};

const DEVICE_GUIDES = {
  android: {
    label: "Android telefon (Samsung, Xiaomi, Motorola)",
    title: "📱 Útmutató Androidos okostelefonhoz és tablethez",
    steps: [
      "<strong>1. Megnyitás:</strong> Nyissa meg a telefonján a <strong>Chrome</strong> böngészőt (a színes kerek ikont), és írja be felülre: <code>gemini.google.com</code> vagy <code>chatgpt.com</code>. (A <strong>Play Áruházból</strong> az ingyenes <em>ChatGPT</em> vagy <em>Google Gemini</em> alkalmazást is letöltheti).",
      "<strong>2. Hangalapú diktálás (gépelés helyett!):</strong> Amikor rábök a szövegmezőre és felugrik a telefon billentyűzete, a billentyűzet jobb felső sarkában (vagy a szóköz mellett) lát egy <strong>kis mikrofon 🎙️ ikont</strong>. Érintse meg, mondja el magyarul a kérdését, és a telefon leírja Ön helyett!",
      "<strong>3. Fénykép küldése (pl. növényről vagy levélről):</strong> A szövegmező bal oldalán lévő <strong>„+” vagy Fényképezőgép 📷</strong> jelre bökve lefotózhat egy elromlott eszközt, egy növény levelét vagy egy hivatalos levelet."
    ]
  },
  iphone: {
    label: "iPhone / iPad",
    title: "🍏 Útmutató iPhone telefonhoz és iPadhez",
    steps: [
      "<strong>1. Megnyitás:</strong> Nyissa meg a <strong>Safari</strong> böngészőt (kék iránytű ikon), és írja be: <code>chatgpt.com</code> vagy <code>gemini.google.com</code>, vagy töltse le az <strong>App Store</strong>-ból a hivatalos <em>ChatGPT</em> alkalmazást.",
      "<strong>2. Magyar diktálás iPhone-on:</strong> Amikor megjelenik a billentyűzet, a jobb alsó sarokban található <strong>mikrofon 🎙️ ikonra</strong> bökve azonnal diktálhat magyarul, így nem kell az apró betűket keresgélni.",
      "<strong>3. Fotó csatolása:</strong> A szövegmező melletti <strong>„+”</strong> gombra bökve válassza a <em>Fénykép készítése</em> lehetőséget, és kérdezze meg az AI-t a lefotózott tárgyról vagy szövegről!"
    ]
  },
  windows: {
    label: "Windows számítógép / laptop",
    title: "💻 Útmutató asztali számítógéphez és laptophoz (Windows)",
    steps: [
      "<strong>1. Megnyitás:</strong> Indítsa el a szokásos böngészőjét (Google Chrome vagy Microsoft Edge), és írja be a címsorba: <code>gemini.google.com</code> vagy <code>chatgpt.com</code>.",
      "<strong>2. Betűk nagyítása a számítógépen:</strong> Ha bármelyik weboldalon túl kicsik a betűk, tartsa lenyomva a billentyűzeten a bal alsó <strong>Ctrl</strong> gombot, és nyomja meg többször a <strong>+ (plusz)</strong> gombot!",
      "<strong>3. Szöveg bemásolása (pl. EESZT leletből vagy e-mailből):</strong> Jelölje ki a szöveget az egérrel, nyomja meg a <strong>Ctrl + C</strong> billentyűket (másolás), majd az AI szövegmezőjébe kattintva nyomja meg a <strong>Ctrl + V</strong> billentyűket (beillesztés)."
    ]
  }
};

let userProfile = {
  name: "Kedves Látogató",
  cityPreset: "Budapest",
  customCity: "",
  device: "android"
};

let aiConfig = {
  mode: "simulator",
  apiKey: ""
};

let lastUserQuestion = "Szia! 65 év feletti magyar felhasználó vagyok. Miben tudsz nekem segíteni a hétköznapokban?";
let activeScamIndex = 0;
let selectedIngredients = ["krumpli", "tejföl", "tojás", "vöröshagyma"];

const SCAM_CASES = [
  {
    id: 0,
    tabLabel: "1. Magyar Posta / Foxpost SMS",
    sender: "SMS üzenet • Feladó: +36 20 981 4412",
    message: "„Magyar Posta: A HU-88412 szamu csomagja szallitasa cimhiba miatt megakadt. Kérjük, erősítse meg lakcímét és fizesse be a 640 Ft újraküldési díjat 12 órán belül itt: http://mposta-hu-csomag.top”",
    isScam: true,
    explanation: "🚨 <strong>Helyes! Ez egy tipikus magyarországi adathalász CSALÁS.</strong><br/>• <strong>1. jel:</strong> Sürgetés („12 órán belül”).<br/>• <strong>2. jel:</strong> Pár száz forintos fizetést kér, de a hamis oldalon a bankkártya-adatait és netbanki belépését akarják ellopni.<br/>• <strong>3. jel:</strong> Hamis webcím (<code>mposta-hu-csomag.top</code> a hivatalos <code>posta.hu</code> helyett)."
  },
  {
    id: 1,
    tabLabel: "2. „Szia Nagyi, új számom van”",
    sender: "SMS / Viber üzenet • Ismeretlen magyar számról",
    message: "„Szia Nagyi! Leejtettem a telefonomat és betört a kijelzője, ez az új számom. Most azonnal ki kell fizetnem egy 185.000 Ft-os számlát, de a netbankom még nem működik az új készüléken. El tudnád utalni erre a számlaszámra? Holnap visszaadom!”",
    isScam: true,
    explanation: "🚨 <strong>Pontosan! Ez az „unokázós” CSALÁS modern, üzenetes változata.</strong><br/>• <strong>Mit tegyen?</strong> Soha ne utaljon pénzt üzenet alapján! Hívja fel a gyerekét vagy unokáját a <strong>régi, megszokott telefonszámán</strong> ellenőrzésképpen."
  },
  {
    id: 2,
    tabLabel: "3. Hivatalos EESZT eRecept értesítő",
    sender: "E-mail • Feladó: EESZT Tájékoztató (ne-valaszolj@eeszt.gov.hu)",
    message: "„Tisztelt Felhasználó! Tájékoztatjuk, hogy az Elektronikus Egészségügyi Szolgáltatási Térben (EESZT) új eRecept vagy egészségügyi dokumentum került rögzítésre. A receptet személyi igazolványával és TAJ-kártyájával bármely gyógyszertárban kiválthatja.”",
    isScam: false,
    explanation: "✅ <strong>Ez egy VALÓDI, biztonságos hivatalos értesítés.</strong><br/>• Nem kér bankkártyaadatot, nem kér pénzt, és nem kéri, hogy gyanús linkre kattintva adja meg a jelszavát – csupán jelzi, hogy az orvos felírta a receptet a felhőbe."
  },
  {
    id: 3,
    tabLabel: "4. MVM / Rezsitámogatás visszatérítés",
    sender: "E-mail • Feladó: MVM Ügyfélszolgálat (visszaterites@mvm-energiatamogatas.info)",
    message: "„Tisztelt Ügyfelünk! Önnek 48.500 Ft túlfizetése keletkezett a földgázszámláján. A visszatérítés jóváírásához kattintson ide, válassza ki a bankját (OTP, MBH, Erste, K&H), és lépjen be netbanki azonosítójával és jelszavával!”",
    isScam: true,
    explanation: "🚨 <strong>Veszélyes CSALÁS!</strong><br/>• Amikor pénzt utalnak vissza Önnek, ahhoz soha nem kell belépni a netbankba egy e-mailben kapott linken keresztül! Az MVM hivatalos oldala kizárólag az <code>mvmnext.hu</code>."
  },
  {
    id: 4,
    tabLabel: "5. OTP / MBH banki fiókzárolás",
    sender: "SMS • Feladó: BankInfo",
    message: "„Az Ön bankkártyáját biztonsági okokból felfüggesztettük. A zárolás azonnali feloldásához erősítse meg adatait: https://netbank-feloldas-hu.com”",
    isScam: true,
    explanation: "🚨 <strong>100% CSALÁS!</strong><br/>• Egyetlen magyar bank sem küld SMS-ben olyan linket, ahol a netbanki belépési adatait és SMS-kódját kell megadnia a zárolás feloldásához."
  }
];

function escapeHtml(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function getEffectiveCity() {
  return userProfile.customCity && userProfile.customCity.trim()
    ? userProfile.customCity.trim()
    : userProfile.cityPreset;
}

function getCityInfo() {
  const base = HUNGARIAN_CITY_DATA[userProfile.cityPreset] || HUNGARIAN_CITY_DATA["Budapest"];
  return { city: getEffectiveCity(), ...base };
}

function initApp() {
  try {
    const savedProf = localStorage.getItem("okostars_60_profile");
    if (savedProf) userProfile = { ...userProfile, ...JSON.parse(savedProf) };
    const savedAi = localStorage.getItem("okostars_60_ai_config");
    if (savedAi) aiConfig = { ...aiConfig, ...JSON.parse(savedAi) };
  } catch (e) {}

  document.getElementById("prof-name").value = userProfile.name;
  document.getElementById("prof-city").value = userProfile.cityPreset;
  document.getElementById("prof-custom-city").value = userProfile.customCity;
  document.getElementById("prof-device").value = userProfile.device;
  document.getElementById("ai-mode-select").value = aiConfig.mode;
  document.getElementById("ai-api-key").value = aiConfig.apiKey;

  setFontSize("large");
  applyLocalizationToUi();
  renderAllTemplateGrids();
  updateHealthBuilder();
  updateFridgePrompt();
  updateLetterBuilder();
  updateStoryBuilder();
  renderScamQuiz();
  selectDeviceGuide(userProfile.device);
  resetSimulatorWithWelcome();
}

function toggleSettingsDrawer() {
  const el = document.getElementById("settings-drawer");
  el.classList.toggle("hidden");
}

function handleCityPresetChange() {
  document.getElementById("prof-custom-city").value = "";
}

function saveUserProfile() {
  userProfile.name = document.getElementById("prof-name").value.trim() || "Kedves Látogató";
  userProfile.cityPreset = document.getElementById("prof-city").value;
  userProfile.customCity = document.getElementById("prof-custom-city").value.trim();
  userProfile.device = document.getElementById("prof-device").value;
  try {
    localStorage.setItem("okostars_60_profile", JSON.stringify(userProfile));
  } catch (e) {}
  applyLocalizationToUi();
  renderAllTemplateGrids();
  updateHealthBuilder();
  updateFridgePrompt();
  updateLetterBuilder();
  updateStoryBuilder();
  selectDeviceGuide(userProfile.device);
  showToast(`Profil elmentve: ${userProfile.name} (${getEffectiveCity()})! Minden példát frissítettünk.`);
}

function saveAiConfig() {
  aiConfig.mode = document.getElementById("ai-mode-select").value;
  aiConfig.apiKey = document.getElementById("ai-api-key").value.trim();
  try {
    localStorage.setItem("okostars_60_ai_config", JSON.stringify(aiConfig));
  } catch (e) {}
  applyLocalizationToUi();
  showToast(aiConfig.mode === "simulator" ? "Beépített Okos Szimulátor mód aktiválva!" : "Valódi Élő AI-kapcsolat elmentve!");
}

async function testLiveAiConnection() {
  saveAiConfig();
  const fb = document.getElementById("ai-test-feedback");
  if (aiConfig.mode === "simulator" || !aiConfig.apiKey) {
    fb.innerText = "ℹ️ Kérjük, válassza ki a Google Gemini vagy OpenAI módot, és illessze be az API-kulcsot!";
    return;
  }
  fb.innerText = "⏳ Kapcsolódás a valódi AI szerverhez...";
  try {
    const reply = await callLiveAiProvider("Írj egyetlen rövid, barátságos magyar mondatot: 'Az élő AI-kapcsolat sikeresen működik!'");
    fb.innerHTML = `✅ Sikeres élő kapcsolat! Válasz: ${escapeHtml(reply)}`;
  } catch (err) {
    fb.innerHTML = `⚠️ Hiba vagy korlátozott hálózati elérés (${escapeHtml(err.message)}). A <strong>„🚀 ChatGPT”</strong> gombokkal kulcs nélkül is azonnal átküldheti bármelyik kérdését!`;
  }
}

function applyLocalizationToUi() {
  const info = getCityInfo();
  const devInfo = DEVICE_GUIDES[userProfile.device] || DEVICE_GUIDES.android;
  const hasLiveKey = aiConfig.mode !== "simulator" && aiConfig.apiKey.length > 8;
  const greetName = userProfile.name || "Kedves Látogató";

  document.getElementById("profile-summary-badge").innerText =
    `📍 ${greetName} • ${info.city} • ${devInfo.label.split(" ")[0]} • ${hasLiveKey ? "⚡ Élő AI aktív" : "🛡️ Szimulátor + 1-kattintásos AI"}`;

  document.getElementById("welcome-banner-title").innerText =
    `Jó napot kívánok, ${greetName}! Itt semmit sem tud elrontani vagy véletlenül megrendelni.`;
  document.getElementById("welcome-banner-sub").innerHTML =
    `A példák jelenleg <strong>${escapeHtml(info.city)}</strong> környékére és <strong>${escapeHtml(devInfo.label)}</strong> készülékre vannak hangolva.`;

  const p1 = `${info.city} területén élek, 65 év feletti vagyok (díjmentes MÁV/Volán utazással). Tervezz nekem egy kényelmes, kevés gyaloglással járó egynapos kirándulást ide: ${info.tripTarget}!`;
  const p2 = `${info.city} környékén keresek TB-támogatott fürdőgyógyászati kezelést (${info.bath}). Írd le a háziorvosi és szakorvosi beutaló menetét Magyarországon!`;
  const p3 = `${info.city} lakosaként szeretnék a Kormányablakba időpontot foglalni a 1818-as ingyenes számon. Írd le lépésről lépésre a menetét és a szükséges iratokat!`;

  document.getElementById("local-city-cards").innerHTML = `
    <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;gap:0.75rem;">
      <div>
        <h4 style="margin:0 0 0.4rem 0;">🚂 65+ Kirándulás innen: ${escapeHtml(info.city)}</h4>
        <p style="font-size:0.85rem;margin:0;color:var(--text-muted);">${escapeHtml(info.transport)}. Ajánlott célpont: <strong>${escapeHtml(info.tripTarget)}</strong>.</p>
      </div>
      <button class="btn btn-primary" onclick='openInSimulator(${JSON.stringify(p1)})'>▶ Útvonalterv kérése</button>
    </div>
    <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;gap:0.75rem;">
      <div>
        <h4 style="margin:0 0 0.4rem 0;">♨️ TB-Gyógyfürdő a közelben</h4>
        <p style="font-size:0.85rem;margin:0;color:var(--text-muted);">Ajánlott gyógyfürdők: <strong>${escapeHtml(info.bath)}</strong>.</p>
      </div>
      <button class="btn btn-primary" onclick='openInSimulator(${JSON.stringify(p2)})'>▶ TB-beutaló menete</button>
    </div>
    <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;gap:0.75rem;">
      <div>
        <h4 style="margin:0 0 0.4rem 0;">🏛️ Kormányablak &amp; 1818</h4>
        <p style="font-size:0.85rem;margin:0;color:var(--text-muted);">${escapeHtml(info.market)}.</p>
      </div>
      <button class="btn btn-primary" onclick='openInSimulator(${JSON.stringify(p3)})'>▶ Ügyintézési segédlet</button>
    </div>
  `;
}

function selectDeviceGuide(devKey) {
  const guide = DEVICE_GUIDES[devKey] || DEVICE_GUIDES.android;
  ["android", "iphone", "windows"].forEach((k) => {
    const btn = document.getElementById("dev-tab-" + k);
    if (btn) btn.className = k === devKey ? "btn btn-primary" : "btn";
  });
  const container = document.getElementById("device-specific-guide");
  if (!container) return;
  container.innerHTML = `
    <h3 style="margin-top:0;">${guide.title}</h3>
    ${guide.steps.map((s) => `<div class="prompt-preview" style="margin-bottom:0.65rem;">${s}</div>`).join("")}
  `;
}

function openExternalChatGPT(promptText) {
  const q = (promptText || "").trim() || lastUserQuestion;
  copyText(q);
  window.open(`https://chatgpt.com/?q=${encodeURIComponent(q)}`, "_blank", "noopener,noreferrer");
  showToast("A kérdést kimásoltuk és megnyitottuk a valódi ChatGPT-ben!");
}

function openExternalGemini(promptText) {
  const q = (promptText || "").trim() || lastUserQuestion;
  copyText(q);
  window.open("https://gemini.google.com/app", "_blank", "noopener,noreferrer");
  showToast("A kérdést kimásoltuk! Illessze be (Ctrl+V) a megnyíló Google Geminibe.");
}

function buildSeniorSystemInstruction() {
  const city = getEffectiveCity();
  const dev = DEVICE_GUIDES[userProfile.device]?.label || "okostelefon";
  return `Te az OkosTárs 60+ nevű, végtelenül türelmes, tisztelettudó, közérthető magyar nyelven beszélő mesterséges intelligencia segéd vagy 60 év feletti felhasználók számára. A felhasználó megszólítása: ${userProfile.name}, lakóhelye: ${city} (Magyarország), készüléke: ${dev}. Használj magyarországi példákat (EESZT, MVM, MÁV 65+ kedvezmény, Kormányablak). Orvosi kérdéseknél mindig emlékeztess a háziorvossal való egyeztetésre.`;
}

async function callLiveAiProvider(userPrompt) {
  const sysPrompt = buildSeniorSystemInstruction();
  const key = aiConfig.apiKey.trim();

  if (aiConfig.mode === "gemini") {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(key)}`;
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: sysPrompt }] },
        contents: [{ role: "user", parts: [{ text: userPrompt }] }]
      })
    });
    if (!resp.ok) throw new Error(`Gemini API hiba (${resp.status})`);
    const data = await resp.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Üres válasz.";
  }

  if (aiConfig.mode === "openai") {
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: sysPrompt },
          { role: "user", content: userPrompt }
        ]
      })
    });
    if (!resp.ok) throw new Error(`OpenAI API hiba (${resp.status})`);
    const data = await resp.json();
    return data?.choices?.[0]?.message?.content || "Üres válasz.";
  }

  throw new Error("Nincs kiválasztva élő AI szolgáltató.");
}

function getLocalizedTemplates() {
  const info = getCityInfo();
  return {
    health: [
      {
        title: "EESZT laborlelet és vérkép értelmezése",
        badge: "EESZT / EgészségAblak",
        badPrompt: "Mit jelent a magas TSH és LDL?",
        goodPrompt: `68 éves vagyok (${info.city}). Az EESZT-ből letöltött vérvételi leletemen a TSH értékem kicsit magasabb, az LDL-koleszterin mellett pedig csillag van. Kérlek, magyarázd el egyszerű, megnyugtató magyar nyelven, mit jelentenek ezek, és mit kérdezzek meg a háziorvosomtól!`,
        whyGood: "Megadja az életkort, az EESZT kontextust és a háziorvosi vizitre való felkészülést."
      },
      {
        title: "Széken ülve végezhető kímélő torna",
        badge: "Mozgás otthon",
        badPrompt: "Tornagyakorlatok időseknek",
        goodPrompt: "72 éves vagyok, a térdem gyakran fáj, ezért nem tudok guggolni. Állíts össze nekem egy 10 perces, biztonságos, stabil széken ülve végezhető reggeli átmozgató tornát!",
        whyGood: "Fontos megemlíteni a térdfájást és azt, hogy széken ülve szeretnénk tornázni."
      },
      {
        title: "TB-támogatott gyógyfürdő beutaló",
        badge: "Hazai ellátás",
        badPrompt: "Fürdőbeutaló menete",
        goodPrompt: `${info.city} környékén élek, és szeretném igénybe venni a TB-támogatott fürdőgyógyászati kezeléseket (${info.bath}). Írd le közérthetően, milyen szakorvos írhatja fel Magyarországon!`,
        whyGood: "Konkrét hazai egészségügyi ellátásra és a lakóhelyhez közeli gyógyfürdőre kérdez rá."
      }
    ],
    kitchen: [
      {
        title: "Sárguló muskátli megmentése",
        badge: "Kert & Erkély",
        badPrompt: "Miért sárgul a muskátli?",
        goodPrompt: "Az erkélyemen déli fekvésű ládában vannak a muskátlik, és az alsó leveleik elkezdtek sárgulni. Naponta öntözöm őket. Mi lehet a 3 leggyakoribb ok, és milyen házi módszerrel segíthetek rajtuk?",
        whyGood: "Leírja a növény helyét és az öntözési szokást."
      },
      {
        title: "Makacs pörkölt- és borfolt kiszedése",
        badge: "Házi praktika",
        badPrompt: "Zsírfolt kiszedése",
        goodPrompt: "A kedvenc pamut asztalterítőmre pörkölt- és vörösborfolt cseppent. Hogyan tudom kiszedni belőle otthon található szerekkel (szódabikarbóna, ecet, mosogatószer)?",
        whyGood: "Megnevezi az anyag típusát és az otthoni szereket."
      },
      {
        title: "Takarékos magyaros heti menü",
        badge: "Nyugdíjasbarát konyha",
        badPrompt: "Olcsó ételek",
        goodPrompt: `Két nyugdíjas számára szeretnék egy változatos, magyaros, de takarékos 5 napos ebédmenüt tervezni, a végén csoportosított bevásárlólistával a helyi piacra (${info.city})!`,
        whyGood: "Kéri a maradékok okos felhasználását és a piaci bevásárlólistát."
      }
    ],
    admin: [
      {
        title: "MVM áram/gáz elszámoló számla reklamáció",
        badge: "MVM Next",
        badPrompt: "Magas a számla",
        goodPrompt: "Az MVM Next-től a szokásos havi 9.000 Ft helyett 46.000 Ft-os elszámoló számlát kaptam, pedig rendszeresen diktálom a mérőállást. Írj nekem egy udvarias, hivatalos magyar levelet a számla felülvizsgálatára és részletfizetésre!",
        whyGood: "Megnevezi a hazai szolgáltatót (MVM Next) és a pontos kérést."
      },
      {
        title: "Kormányablak, Ügyfélkapu+ és 1818 segítség",
        badge: "Kormányablak",
        badPrompt: "Hogy működik az Ügyfélkapu?",
        goodPrompt: `${info.city} lakosa vagyok. Magyarázd el egyszerűen, mit kell elintéznem személyesen a Kormányablakban a személyi igazolvány vagy Ügyfélkapu+ ügyében, és hogyan foglalhatok időpontot a 1818-as számon!`,
        whyGood: "Konkrétan rákérdez a hazai ügyintézés menetére."
      },
      {
        title: "Megható családi köszöntő",
        badge: "Családi ünnep",
        badPrompt: "Születésnapi köszöntő",
        goodPrompt: "A húgom most lesz 65 éves, nagyon szeret kertészkedni és imádja a három unokáját. Írj neki egy szívhez szóló magyar születésnapi köszöntőt!",
        whyGood: "Személyes apróságokat ad meg, ettől lesz egyedi."
      }
    ],
    safety: [
      {
        title: "Magyar Posta / Foxpost SMS ellenőrzése",
        badge: "Életmentő tipp",
        badPrompt: "Ez csalás?",
        goodPrompt: "Ezt az SMS-t kaptam: 'Magyar Posta: A csomagja kiszállítása szünetel címhiba miatt. Kattintson ide a 650 Ft díj rendezéséhez: http://posta-csomag-hu.info'. Kérlek, mondd meg, hogy ez csalás-e!",
        whyGood: "Szó szerint bemásolja a gyanús szöveget anélkül, hogy rákattintana a linkre."
      },
      {
        title: "„Csodagyógyszer” reklám ellenőrzése",
        badge: "Egészségvédelem",
        badPrompt: "Jó ez a krém?",
        goodPrompt: "Láttam az interneten egy hirdetést, ami azt ígéri, hogy egyetlen hét alatt végleg megszünteti a porckopást, és egy híres magyar professzor fotója van mellette, 50%-os akcióval. Hogyan ismerhetem fel, ha ez hamis reklám?",
        whyGood: "Leírja a hirdetés tipikus trükkjeit."
      },
      {
        title: "Könnyen megjegyezhető magyar „mondat-jelszó”",
        badge: "Fiókbiztonság",
        badPrompt: "Adj egy jelszót",
        goodPrompt: "Taníts meg egy egyszerű módszert arra, hogyan találhatok ki magamnak olyan biztonságos jelszót a Gmail levelezésemhez, amit egy 70 éves magyar ember is könnyen megjegyez fejben!",
        whyGood: "Nem a kész jelszót kéri, hanem a módszert."
      }
    ],
    leisure: [
      {
        title: `Egynapos 65+ kirándulás innen: ${info.city}`,
        badge: "65+ Díjmentes MÁV/Volán",
        badPrompt: "Kirándulás ötlet",
        goodPrompt: `${info.city} településről induló, 65 év feletti házaspár vagyunk (díjmentes MÁV és Volánbusz utazással). Tervezz nekünk egy kényelmes tempójú egynapos kirándulást ide: ${info.tripTarget}!`,
        whyGood: "Kiemeli a 65+ utazási kedvezményt és a saját indulási várost."
      },
      {
        title: "Retró magyar film- és slágerkvíz (1960–1980)",
        badge: "Agytorna",
        badPrompt: "Kérdezz valamit",
        goodPrompt: "Játsszunk egy 5 kérdésből álló, jókedvű nosztalgia-kvízt az 1960-as és 1970-es évek híres magyar filmjeiről és slágereiről! Egyszerre csak egy kérdést tegyél fel!",
        whyGood: "Megkéri az AI-t, hogy egyszerre csak egy kérdést tegyen fel."
      },
      {
        title: "Családi emlékek lejegyzése az unokáknak",
        badge: "Családi krónika",
        badPrompt: "Írj a gyerekkoromról",
        goodPrompt: `Szeretném leírni az unokáimnak, milyen volt a fiatalságom ${info.city} környékén az 1960-as években. Tegyél fel nekem 5 inspiráló kérdést ehhez!`,
        whyGood: "Az AI-t kérdező riporterként használja."
      }
    ]
  };
}

function toggleMobilePreviewMode() {
  document.body.classList.toggle("mobile-preview-active");
  const isActive = document.body.classList.contains("mobile-preview-active");
  const lbl = document.getElementById("mobile-preview-label");
  if (lbl) lbl.innerText = isActive ? "Asztali nézet" : "Mobil nézet";
  showToast(
    isActive
      ? "📱 Mobiltelefon nézet bekapcsolva (412px széles okostelefon-keret, alsó hüvelykujj-menüvel)!"
      : "💻 Visszaváltottunk teljes képernyős nézetre."
  );
}

function toggleMobileChapterDrawer() {
  const drawer = document.getElementById("mobile-chapter-drawer");
  if (drawer) drawer.classList.toggle("hidden");
}

function switchSection(secKey) {
  const sections = ["home", "health", "kitchen", "admin", "safety", "leisure", "simulator", "realtools"];
  sections.forEach((k) => {
    const el = document.getElementById("sec-" + k);
    if (el) {
      if (k === secKey) el.classList.remove("hidden");
      else el.classList.add("hidden");
    }
  });

  const mDrawer = document.getElementById("mobile-chapter-drawer");
  if (mDrawer) mDrawer.classList.add("hidden");

  const navMap = {
    home: "nav-home",
    health: "nav-health",
    kitchen: "nav-home-kitchen",
    admin: "nav-admin",
    safety: "nav-safety",
    leisure: "nav-leisure",
    simulator: "nav-simulator",
    realtools: "nav-realtools"
  };

  Object.keys(navMap).forEach((k) => {
    const btn = document.getElementById(navMap[k]);
    if (!btn) return;
    btn.className = k === secKey ? "btn btn-primary" : "btn";
  });

  const bottomMap = {
    home: "mnav-home",
    simulator: "mnav-simulator",
    realtools: "mnav-realtools"
  };
  ["mnav-home", "mnav-topics", "mnav-simulator", "mnav-realtools"].forEach((id) => {
    const b = document.getElementById(id);
    if (b) b.className = "mnav-btn";
  });
  const activeBottom = document.getElementById(bottomMap[secKey] || "mnav-topics");
  if (activeBottom) activeBottom.className = "mnav-btn active";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setFontSize(size) {
  const htmlEl = document.documentElement;
  htmlEl.classList.remove("font-normal", "font-large", "font-xlarge");
  htmlEl.classList.add("font-" + size);

  ["normal", "large", "xlarge"].forEach((s) => {
    const btn = document.getElementById("btn-font-" + s);
    if (!btn) return;
    btn.className = s === size ? "btn btn-compact btn-primary" : "btn btn-compact";
  });
}

function toggleHighContrast() {
  const htmlEl = document.documentElement;
  htmlEl.classList.toggle("high-contrast");
  showToast(htmlEl.classList.contains("high-contrast") ? "Erős kontraszt mód bekapcsolva!" : "Normál színmód visszaállítva!");
}

function showToast(msg) {
  const banner = document.getElementById("toast-banner");
  document.getElementById("toast-text").innerText = msg;
  banner.classList.remove("hidden");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    banner.classList.add("hidden");
  }, 3800);
}

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("A szöveget kimásoltuk a vágólapra!");
    });
  }
}

function renderAllTemplateGrids() {
  const templates = getLocalizedTemplates();
  Object.keys(templates).forEach((cat) => {
    const container = document.getElementById(cat + "-templates-grid");
    if (!container) return;
    container.innerHTML = templates[cat]
      .map(
        (item, idx) => `
      <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;gap:1rem;">
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
            <span class="badge">${escapeHtml(item.badge)}</span>
            <span style="font-size:0.75rem;color:var(--text-muted);font-weight:700;">${idx + 1}. minta</span>
          </div>
          <h4 style="margin:0 0 0.75rem 0;font-size:1.05rem;">${escapeHtml(item.title)}</h4>
          <p style="font-size:0.8rem;margin:0 0 0.5rem 0;color:var(--error);">
            <strong>❌ Túl rövid kérdés:</strong> „${escapeHtml(item.badPrompt)}”
          </p>
          <div class="prompt-preview" style="font-size:0.85rem;margin-bottom:0.75rem;">
            <strong>✅ Így kérdezze az AI-tól:</strong><br/>
            „${escapeHtml(item.goodPrompt)}”
          </div>
          <p style="font-size:0.8rem;color:var(--text-muted);margin:0;">
            <strong>💡 Miért működik jól?</strong> ${escapeHtml(item.whyGood)}
          </p>
        </div>
        <div class="action-row">
          <button class="btn btn-primary" onclick='openInSimulator(${JSON.stringify(item.goodPrompt)})'>▶ Gyakorló / Élő AI</button>
          <button class="btn btn-secondary" onclick='openExternalChatGPT(${JSON.stringify(item.goodPrompt)})'>🚀 ChatGPT</button>
          <button class="btn" onclick='copyText(${JSON.stringify(item.goodPrompt)})'>📋 Másolás</button>
        </div>
      </div>
    `
      )
      .join("");
  });
}

function updateHealthBuilder() {
  const topic = document.getElementById("health-topic").value;
  const detail = document.getElementById("health-detail").value.trim() || "enyhe hypertonia";
  const style = document.getElementById("health-style").value;
  const city = getEffectiveCity();

  let prompt = "";
  if (topic === "lelet") {
    prompt = `65 év feletti vagyok (${city}). Az EESZT orvosi leletemen ez szerepel: „${detail}”. Kérlek, magyarázd el nekem, mit jelent ez! ${style}, és kerüld a bonyolult latin kifejezéseket!`;
  } else if (topic === "vizit") {
    prompt = `Hamarosan orvosi kontrollra megyek (${city}) a következő panasszal vagy diagnózissal kapcsolatban: „${detail}”. Írj össze nekem 5 fontos kérdést a szakorvoshoz! ${style}.`;
  } else if (topic === "torna") {
    prompt = `65 év feletti vagyok, és erre szeretnék biztonságos otthoni átmozgatást: „${detail}”. Állíts össze egy 10 perces, ízületkímélő, széken ülve végezhető tornát! ${style}.`;
  } else {
    prompt = `Szeretnék egészségesebben étkezni, figyelembe véve ezt: „${detail}”. Adj nekem 5 magyaros, olcsó és könnyen elkészíthető ételötletet! ${style}.`;
  }
  document.getElementById("health-generated-prompt").innerText = prompt;
}

function toggleIngredient(btn, ing) {
  const idx = selectedIngredients.indexOf(ing);
  const label = ing.charAt(0).toUpperCase() + ing.slice(1);
  if (idx > -1) {
    selectedIngredients.splice(idx, 1);
    btn.className = "btn";
    btn.innerText = label;
  } else {
    selectedIngredients.push(ing);
    btn.className = "btn btn-primary";
    btn.innerText = "✓ " + label;
  }
  updateFridgePrompt();
}

function updateFridgePrompt() {
  const list = selectedIngredients.length > 0 ? selectedIngredients.join(", ") : "krumpli, tojás és hagyma";
  const diet = document.getElementById("fridge-diet").value;
  const portions = document.getElementById("fridge-portions").value;
  document.getElementById("fridge-generated-prompt").innerText =
    `Van itthon a konyhában: ${list} (plusz alapvető magyar fűszerek, só, pirospaprika, olaj, liszt). Kérlek, írj nekem ezekből ${portions} egy olyan receptet, ami ${diet}!`;
}

function updateLetterBuilder() {
  const type = document.getElementById("letter-type").value;
  const tone = document.getElementById("letter-tone").value;
  const note = document.getElementById("letter-note").value.trim();
  const city = getEffectiveCity();

  let target = "az MVM Next / közműszolgáltató ügyfélszolgálatának";
  if (type === "garancia") target = "az üzletnek garanciális ügyintézés céljából";
  if (type === "onkormanyzat") target = `${city} Önkormányzatának`;
  if (type === "koszonto") target = "egy kedves családtagomnak ünnepi alkalomból";

  document.getElementById("letter-generated-prompt").innerText =
    `Kérlek, fogalmazz meg nekem egy ${tone} levelet ${target}! A levél lényege és háttere a következő: „${note}”. Tagold szépen bekezdésekre (${userProfile.name}, ${city})!`;
}

function updateStoryBuilder() {
  const name = document.getElementById("story-name").value.trim() || "Bence, 5 éves";
  const hero = document.getElementById("story-hero").value.trim() || "egy bátor kiskutya";
  const lesson = document.getElementById("story-lesson").value;
  const city = getEffectiveCity();
  document.getElementById("story-generated-prompt").innerText =
    `Írj egy kedves, megnyugtató magyar esti mesét az unokámnak (${name}), amelyben szerepel ${city} is. A mese főszereplője legyen ő maga és ${hero}. A történet szóljon ${lesson}!`;
}

function renderScamQuiz() {
  const tabsEl = document.getElementById("scam-tabs");
  tabsEl.innerHTML = SCAM_CASES.map(
    (c, i) => `
    <button onclick="selectScamCase(${i})" class="btn ${i === activeScamIndex ? "btn-primary" : ""}">
      ${c.tabLabel}
    </button>
  `
  ).join("");

  const item = SCAM_CASES[activeScamIndex];
  document.getElementById("scam-sender").innerText = item.sender;
  document.getElementById("scam-message").innerText = item.message;
  const exp = document.getElementById("scam-explanation");
  exp.classList.add("hidden");
  exp.innerHTML = "";
}

function selectScamCase(idx) {
  activeScamIndex = idx;
  renderScamQuiz();
}

function answerScamQuiz(choice) {
  const item = SCAM_CASES[activeScamIndex];
  const correct = (choice === "scam") === item.isScam;
  const exp = document.getElementById("scam-explanation");
  exp.classList.remove("hidden");
  exp.innerHTML = `
    <div style="font-weight:700;margin-bottom:0.4rem;">
      ${correct ? "🎉 Kitűnő meglátás!" : "💡 Érdemes óvatosnak lenni! Nézzük meg, miért:"}
    </div>
    <div>${item.explanation}</div>
  `;
}

function analyzeScamInSimulator() {
  const item = SCAM_CASES[activeScamIndex];
  openInSimulator(`Ezt az üzenetet kaptam Magyarországon (${item.sender}): ${item.message} Kérlek, vizsgáld meg, hogy ez csalás vagy valódi üzenet-e, és mondd el, mit tegyek!`);
}

function resetSimulatorWithWelcome() {
  const log = document.getElementById("sim-chat-log");
  log.innerHTML = `
    <div class="bubble-ai">
      <strong>🤖 OkosTárs AI (${escapeHtml(getEffectiveCity())}):</strong> Jó napot kívánok, ${escapeHtml(userProfile.name)}! Itt biztonságban gyakorolhat, vagy ha megadott Gemini / OpenAI API-kulcsot, közvetlenül a valódi AI-val beszélgethet.
    </div>
  `;
}

function openInSimulator(promptText) {
  switchSection("simulator");
  document.getElementById("sim-user-input").value = promptText;
  handleSimulatorSubmit();
}

function sendSimulatorPreset(key) {
  const info = getCityInfo();
  const presets = {
    health_lelet: `68 éves vagyok (${info.city}). Az EESZT leletemen az szerepel, hogy 'enyhe hypertonia, emelkedett LDL-koleszterin és kezdődő gonarthrosis'. Kérlek, magyarázd el egyszerű magyar nyelven, orvosi szakszavak nélkül, mit jelentenek ezek!`,
    kitchen_recipe: "Van itthon krumpli, tejföl, tojás és egy kis vöröshagyma. Írj nekem ezekből egy egyszerű, házias, olcsó receptet 2 személyre, ami 30 perc alatt elkészül!",
    admin_complaint: `Kérlek, fogalmazz meg egy udvarias, de határozott hivatalos reklamáló levelet az MVM Next ügyfélszolgálatának (${info.city}), mert a szokásos havi 8.000 Ft helyett 42.000 Ft-os számla érkezett!`,
    safety_sms: "Ezt az SMS-t kaptam: 'Magyar Posta: A csomagja kiszállítása szünetel címhiba miatt. Fizesse be a 640 Ft díjat itt: http://mposta-hu-csomag.top'. Ez csalás?",
    local_trip: `${info.city} településről induló, 65 év feletti házaspár vagyunk, így díjmentesen utazunk a MÁV és Volánbusz járatain. Tervezz nekünk egy kényelmes tempójú egynapos kirándulást ide: ${info.tripTarget}!`
  };
  if (presets[key]) {
    document.getElementById("sim-user-input").value = presets[key];
    handleSimulatorSubmit();
  }
}

function sendSimulatorFollowup(text) {
  document.getElementById("sim-user-input").value = text;
  handleSimulatorSubmit();
}

async function handleSimulatorSubmit() {
  const input = document.getElementById("sim-user-input");
  const userText = input.value.trim();
  if (!userText) return;

  lastUserQuestion = userText;
  const log = document.getElementById("sim-chat-log");
  const uDiv = document.createElement("div");
  uDiv.className = "bubble-user";
  uDiv.innerText = userText;
  log.appendChild(uDiv);
  input.value = "";

  const aDiv = document.createElement("div");
  aDiv.className = "bubble-ai";

  if (aiConfig.mode !== "simulator" && aiConfig.apiKey.trim().length > 8) {
    aDiv.innerText = "⏳ Valódi AI válaszának lekérése...";
    log.appendChild(aDiv);
    try {
      const liveText = await callLiveAiProvider(userText);
      aDiv.innerHTML = `<strong>⚡ Valódi Élő AI válasza:</strong><br/>${escapeHtml(liveText).replace(/\n/g, "<br/>")}`;
    } catch (err) {
      aDiv.innerHTML = generateResponseHtml(userText);
    }
  } else {
    aDiv.innerHTML = generateResponseHtml(userText);
    log.appendChild(aDiv);
  }
  log.scrollTop = log.scrollHeight;
}

function generateResponseHtml(q) {
  const lower = q.toLowerCase();
  const info = getCityInfo();
  if (lower.includes("egyszerűbben") || lower.includes("rövidebb")) {
    return `<strong>🤖 OkosTárs AI válasza:</strong><br/>1. Nincs ok az ijedtségre, minden lépést saját tempóban végezhet.<br/>2. A hivatalos vagy orvosi ügyekben egyeztessen a helyi szakemberrel (${escapeHtml(info.city)}).<br/>3. Bármikor kérdezhet újra!`;
  }
  if (lower.includes("lelet") || lower.includes("eeszt") || lower.includes("hypertonia") || lower.includes("koleszterin")) {
    return `<strong>🤖 OkosTárs AI válasza (${escapeHtml(info.city)}):</strong><br/>• <strong>Enyhe hypertonia:</strong> enyhén magas vérnyomást jelent.<br/>• <strong>Emelkedett LDL-koleszterin:</strong> a vérzsír egyik fajtája, amelynél érdemes kevesebb zsíros ételt és több zöldséget fogyasztani.<br/>• <strong>Gonarthrosis:</strong> a térdízületi porc természetes kopása.<br/><em>Javasolt kérdés a háziorvoshoz: „Kiírható-e TB-támogatott fürdőkezelés (${escapeHtml(info.bath)})?”</em>`;
  }
  if (lower.includes("kirándul") || lower.includes("máv") || lower.includes("fürdő")) {
    return `<strong>🤖 OkosTárs AI válasza (${escapeHtml(info.city)}):</strong><br/>• <strong>65+ díjmentes közlekedés:</strong> ${escapeHtml(info.transport)}.<br/>• <strong>Ajánlott úti cél:</strong> ${escapeHtml(info.tripTarget)}.<br/>• <strong>Gyógyfürdő a közelben:</strong> ${escapeHtml(info.bath)}.`;
  }
  if (lower.includes("krumpli") || lower.includes("recept") || lower.includes("tejföl")) {
    return "<strong>🤖 OkosTárs AI válasza:</strong><br/><strong>Tejfölös-hagymás tepsis burgonya (2 főre, 25 perc):</strong><br/>1. 4 közepes krumplit karikázzon fel, és sós vízben főzze elő 8 percig.<br/>2. A hagymát pirítsa üvegesre kevés magyar pirospaprikával, majd keverje el 1 pohár tejföllel és 2 felvert tojással.<br/>3. Forgassa össze a krumplival, és 15 perc alatt süsse aranybarnára!";
  }
  if (lower.includes("számla") || lower.includes("mvm") || lower.includes("levél") || lower.includes("reklam")) {
    return `<strong>🤖 OkosTárs AI válasza:</strong><br/><strong>Tárgy: Számlakifogás és felülvizsgálati kérelem</strong><br/>Tisztelt Ügyfélszolgálat! Alulírott ${escapeHtml(userProfile.name)} (${escapeHtml(info.city)}) kérem a részemre kiállított 42.000 Ft-os számla tételes felülvizsgálatát, mivel szokásos havi fogyasztásunk 8.000 Ft körül alakul. Kérem a mérőállás ellenőrzését és kamatmentes részletfizetés biztosítását. Tisztelettel: ${escapeHtml(userProfile.name)}`;
  }
  if (lower.includes("csalás") || lower.includes("sms") || lower.includes("posta")) {
    return "<strong>🤖 OkosTárs AI válasza:</strong><br/>🚨 <strong>VIGYÁZAT, EZ CSALÁS!</strong> A Magyar Posta hivatalos oldala a <code>posta.hu</code>, soha nem küld <code>.top</code> végződésű linket. A csalók a 640 Ft-os fizetés ürügyén a bankkártya-adatait szeretnék megszerezni.";
  }
  return `<strong>🤖 OkosTárs AI válasza (${escapeHtml(info.city)}):</strong><br/>Köszönöm a kérdését, ${escapeHtml(userProfile.name)}! A lenti <strong>„🚀 Kérdés megnyitása valódi ChatGPT-ben”</strong> gombbal ezt a kérdést egyetlen kattintással megnyithatja az élő ChatGPT-ben is!`;
}

let isReadingPage = false;
function readCurrentSectionAloud() {
  if (!("speechSynthesis" in window)) {
    showToast("A böngésző nem támogatja a hangos felolvasást ezen az eszközön.");
    return;
  }
  if (isReadingPage) {
    window.speechSynthesis.cancel();
    isReadingPage = false;
    document.getElementById("read-btn-label").innerText = "🔊 Oldal felolvasása";
    return;
  }
  const visibleSec = Array.from(document.querySelectorAll(".app-section")).find((s) => !s.classList.contains("hidden"));
  if (!visibleSec) return;
  const utter = new SpeechSynthesisUtterance(visibleSec.innerText.replace(/\s+/g, " ").slice(0, 900));
  utter.lang = "hu-HU";
  utter.rate = 0.95;
  utter.onend = () => {
    isReadingPage = false;
    document.getElementById("read-btn-label").innerText = "🔊 Oldal felolvasása";
  };
  isReadingPage = true;
  document.getElementById("read-btn-label").innerText = "⏹️ Felolvasás megállítása";
  window.speechSynthesis.speak(utter);
}

function startSimulatedOrRealVoice() {
  const input = document.getElementById("sim-user-input");
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRec) {
    try {
      const rec = new SpeechRec();
      rec.lang = "hu-HU";
      showToast("Beszéljen a mikrofonba magyarul!");
      rec.onresult = (e) => {
        input.value = e.results[0][0].transcript;
        showToast("Sikeres hangfelismerés! Kattintson a Küldés gombra.");
      };
      rec.onerror = () => runVoiceDemo(input);
      rec.start();
      return;
    } catch (e) {
      runVoiceDemo(input);
    }
  } else {
    runVoiceDemo(input);
  }
}

function runVoiceDemo(input) {
  showToast("Hangalapú diktálás bemutató...");
  const demo = `${getEffectiveCity()} településről szeretnék 65 év feletti kedvezménnyel egy kényelmes egynapos kirándulást tervezni!`;
  input.value = "";
  let i = 0;
  const t = setInterval(() => {
    input.value += demo.charAt(i++);
    if (i >= demo.length) clearInterval(t);
  }, 24);
}

window.addEventListener("DOMContentLoaded", initApp);


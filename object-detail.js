(() => {
  const data = window.solarSystemData;
  const profiles = data.objects;
  const stories = {
    sun: {
      heading: "太陽如何照亮整個太陽系？",
      paragraphs: ["太陽的核心持續進行核融合，把氫轉變為氦並釋放能量。這些能量穿越太陽內部，再以光與熱向太空傳播，支撐地球上的氣候與生命。", "太陽並非靜止不動：它帶著整個太陽系，以約每秒 220 公里的速度繞行銀河系中心。從太陽表面吹出的帶電粒子形成太陽風，也塑造了行星際空間。"],
      points: ["核心溫度約 1,500 萬°C，表面可見層約 5,500°C。", "太陽光到達地球約需 8 分 20 秒。", "太陽約在 46 億年前形成，仍位於主序星階段。"],
      related: ["mercury", "earth", "jupiter"]
    },
    mercury: {
      heading: "一顆極端溫差的撞擊世界",
      paragraphs: ["水星沒有濃厚大氣保留熱量，面向太陽的一側可以非常炎熱，漫長夜晚則急速降溫。它的表面布滿古老撞擊坑，保存了太陽系早期的地質紀錄。", "水星的公轉速度最快，但自轉緩慢。一個水星太陽日（從一次日出到下一次日出）約等於 176 個地球日。"],
      points: ["沒有天然衛星，也沒有明顯的大氣層。", "表面存在水冰，主要藏在永久陰影的極區撞擊坑中。", "NASA 的信使號任務曾環繞水星並繪製其地表。"],
      related: ["sun", "venus", "moon"]
    },
    venus: {
      heading: "濃密雲層下的溫室世界",
      paragraphs: ["金星厚重的大氣主要由二氧化碳構成，強烈的溫室效應使地表成為太陽系最炎熱的行星表面之一。高空雲層含有硫酸液滴，地表則承受極高的大氣壓力。", "金星緩慢地逆向自轉，因此太陽會在西方升起。其自轉一圈所需時間比繞太陽公轉一圈還長。"],
      points: ["地表溫度約 465°C，足以熔化鉛。", "大小與組成和地球相近，因此常被稱作地球的姊妹行星。", "蘇聯金星號探測器曾短暫著陸並傳回地表影像。"],
      related: ["mercury", "earth", "mars"]
    },
    earth: {
      heading: "適合生命繁衍的藍色家園",
      paragraphs: ["地球的液態水、保護性大氣層與適中的日照，共同塑造了豐富多樣的環境。海洋與大氣循環搬運熱量，磁場則有助於抵禦部分來自太陽的帶電粒子。", "地球位於太陽的宜居帶，但真正讓家園適合生命的，是多種地質、化學與氣候條件長期交互作用的結果。"],
      points: ["約 71% 的地表被海洋覆蓋。", "月球造成的潮汐影響海岸與海洋生態。", "地球是目前唯一已確認存在生命的天體。"],
      related: ["moon", "mars", "sun"]
    },
    mars: {
      heading: "尋找水與生命線索的紅色星球",
      paragraphs: ["火星表面的氧化鐵塵埃讓它看起來呈紅色。河道、三角洲與含水礦物顯示，遠古火星曾有大量液態水；今天的水則多以冰的形式存在。", "火星擁有巨大的火山與峽谷，包括高聳的奧林帕斯山和綿延數千公里的水手號峽谷。多國探測器持續研究它的地質與古代環境。"],
      points: ["火星的一日約 24 小時 37 分，與地球相近。", "兩顆小衛星為火衛一與火衛二。", "探測車正在尋找古代微生物可能留下的環境證據。"],
      related: ["earth", "ceres", "jupiter"]
    },
    jupiter: {
      heading: "以引力守護眾多衛星的巨行星",
      paragraphs: ["木星是太陽系最大的行星，主要由氫與氦構成，沒有可供探測器站立的固體表面。其彩色雲帶由不同高度與速度的大氣流形成。", "大紅斑是木星南半球一場持續數百年的巨大風暴。木星強大的磁場和眾多衛星，使它成為一個宛如微型行星系的探索目的地。"],
      points: ["木星的大紅斑是一場比地球還大的持續風暴。", "木衛二、木衛三與木衛四等大衛星各有獨特地質。", "朱諾號探測器正在研究木星的內部結構與磁場。"],
      related: ["europa", "ganymede", "saturn"]
    },
    saturn: {
      heading: "由無數冰粒構成的光環奇景",
      paragraphs: ["土星的光環由冰粒、岩石碎片與塵埃組成，寬廣卻極為薄。行星的重力與衛星之間的交互作用，共同塑造出光環中的縫隙、波紋與細緻結構。", "土星也是氣體巨行星，密度平均低於水。它的北極有醒目的六角形噴流，至今仍是大氣研究的重要謎題。"],
      points: ["光環跨度超過 27 萬公里，但主環大多只有數十公尺厚。", "土衛六有甲烷湖泊，土衛二則從冰裂縫噴出水羽流。", "卡西尼號曾長期環繞土星，並釋放惠更斯號登陸泰坦。"],
      related: ["titan", "enceladus", "jupiter"]
    },
    uranus: {
      heading: "幾乎側躺著繞太陽運行",
      paragraphs: ["天王星的自轉軸傾斜約 98 度，使它看起來像側躺著繞太陽公轉。這種姿態造成極端漫長的季節，極區可能連續數十年面向或背離太陽。", "大氣中的甲烷吸收紅光，讓天王星呈現青藍色。它屬於冰巨行星，內部含有水、氨與甲烷等物質。"],
      points: ["天王星有微暗的行星環與多顆已知衛星。", "其公轉一周約需 84 個地球年。", "旅行者二號在 1986 年飛掠，是目前唯一近距離造訪的探測器。"],
      related: ["neptune", "saturn", "jupiter"]
    },
    neptune: {
      heading: "遙遠邊疆的極速風暴",
      paragraphs: ["海王星是太陽系已知最遠的行星，呈現深藍色，並擁有極強的行星風。雲層中的風速可達每小時兩千公里左右，是太陽系中最快的風之一。", "海王星的位置曾先由天王星軌道的異常推算，再由望遠鏡確認。它的衛星海衛一沿逆行軌道運行，可能是後來被捕獲的柯伊伯帶天體。"],
      points: ["海王星繞太陽一周約需 165 個地球年。", "海衛一表面有活躍的氮氣噴流。", "旅行者二號於 1989 年飛掠，至今仍是唯一近距離造訪的探測器。"],
      related: ["uranus", "pluto", "kuiper-belt"]
    },
    moon: {
      heading: "陪伴地球的潮汐夥伴",
      paragraphs: ["月球表面有明亮高地與較暗的月海。這些月海並非液態海洋，而是早期火山熔岩冷卻後形成的廣大平原。", "月球引力牽動地球海洋潮汐，也逐漸穩定地球自轉軸。它是人類親自踏足過的唯一地球以外天體。"],
      points: ["月球平均距離地球約 38.4 萬公里。", "潮汐鎖定使月球總以相同半球朝向地球。", "阿波羅計畫帶回的岩石讓科學家得以研究月球的形成歷史。"],
      related: ["earth", "mars", "ceres"]
    },
    europa: {
      heading: "冰殼之下可能藏著深海",
      paragraphs: ["木衛二表面佈滿交錯裂紋與年輕冰原，撞擊坑相對稀少。木星引力造成的潮汐加熱，可能讓冰殼下方的鹹水海洋長期保持液態。", "如果海洋與岩石海床之間存在化學能量來源，便可能形成值得研究的宜居環境；這不代表已發現生命，而是讓歐羅巴成為探索熱點。"],
      points: ["歐羅巴的體積比地球的月球稍小。", "冰殼厚度仍有不確定性，可能達數公里至數十公里。", "NASA 的歐羅巴快帆任務將多次飛掠觀測其冰殼與地下海洋。"],
      related: ["jupiter", "ganymede", "enceladus"]
    },
    titan: {
      heading: "擁有甲烷湖泊的濃霧世界",
      paragraphs: ["土衛六的大氣主要由氮氣構成，地表非常寒冷，液態甲烷與乙烷形成湖泊、河道與降雨循環。這是一種以碳氫化合物運作的異星氣候系統。", "泰坦也可能在冰殼之下擁有液態水海洋。它的厚重大氣讓它成為少數可以使用降落傘與旋翼飛行器探索的外星衛星。"],
      points: ["泰坦是土星最大的衛星，也是太陽系中唯一擁有濃密大氣的衛星。", "卡西尼號與惠更斯號曾提供重要的大氣及地表觀測。", "蜻蜓號任務計畫以前往泰坦研究前生物化學。"],
      related: ["saturn", "enceladus", "europa"]
    },
    enceladus: {
      heading: "從冰裂縫噴出的海洋線索",
      paragraphs: ["土衛二表面覆蓋著明亮水冰，南極附近的「虎紋」裂縫會噴出水蒸氣、冰粒與其他物質。這些羽流為研究地下海洋提供了天然採樣機會。", "卡西尼號在羽流中發現鹽類與有機分子等成分，並觀察到與海床熱液活動相符的線索；生命是否存在仍未有定論。"],
      points: ["直徑約 500 公里，卻有活躍的地質現象。", "冰粒會補充土星廣闊光環系統中的 E 環。", "它的全球地下海洋使其成為重要的天體生物學目標。"],
      related: ["saturn", "europa", "titan"]
    },
    ganymede: {
      heading: "比水星還大的冰封衛星",
      paragraphs: ["甘尼米德表面同時有古老暗色撞擊地形與較年輕的明亮溝槽區域。它內部分層，可能包含金屬核心、岩石層與多層水冰及海洋。", "甘尼米德具有自己的磁場，是衛星中的獨特案例。木星磁場與它的磁層交互作用，形成可供探測研究的極光活動。"],
      points: ["甘尼米德是太陽系最大的天然衛星，直徑大於水星。", "冰層下可能存在多層鹹水海洋。", "歐洲太空總署的 JUICE 任務將研究木星冰衛星系統。"],
      related: ["jupiter", "europa", "moon"]
    },
    pluto: {
      heading: "柯伊伯帶中的冰原與山脈",
      paragraphs: ["冥王星是柯伊伯帶中知名的矮行星，地表有氮冰、甲烷冰與水冰山脈。新視野號拍攝的湯博區呈現明亮心形，左側廣大冰原仍可能緩慢流動。", "冥王星與最大衛星凱倫形成雙星系統般的特殊組合，周圍另有四顆小衛星。它於 2006 年被重新分類為矮行星，仍是太陽系重要成員。"],
      points: ["冥王星的一年約等於 248 個地球年。", "它有五顆已知衛星，最大的是凱倫。", "新視野號於 2015 年飛掠，首次近距離揭開它的地表。"],
      related: ["kuiper-belt", "neptune", "ceres"]
    },
    ceres: {
      heading: "小行星帶裡的矮行星",
      paragraphs: ["穀神星位於火星與木星之間，是小行星帶中最大的天體。它的尺度足以讓自身重力把外形塑造成近似球體，因此被歸類為矮行星。", "黎明號探測器發現撞擊坑中的亮色鹽類沉積物，以及可能與地下鹹水活動相關的特徵。穀神星因此成為研究水與早期太陽系的重要線索。"],
      points: ["穀神星直徑約 940 公里。", "它繞太陽公轉一周約需 4.6 個地球年。", "黎明號於 2015 年進入穀神星軌道，執行詳細觀測。"],
      related: ["asteroid-belt", "mars", "pluto"]
    },
    halley: {
      heading: "世代相傳的週期性訪客",
      paragraphs: ["彗星由冰、塵埃與岩石構成。當哈雷彗星接近太陽，表層冰物質昇華，帶出氣體與塵埃形成明亮彗髮及延伸的彗尾；遠離太陽時，這些活動大幅減弱。", "哈雷彗星的週期約 75 至 76 年，是可用肉眼觀察的短週期彗星。它的回歸紀錄幫助天文學家確認，歷史上不同時代看到的是同一顆彗星。"],
      points: ["下次預計於 2061 年回到近日點。", "彗尾總是大致朝離開太陽的方向延伸。", "地球每年可見的寶瓶座 η 流星雨與獵戶座流星雨，分別和哈雷彗星留下的塵埃有關。"],
      related: ["kuiper-belt", "oort-cloud", "sun"]
    },
    "asteroid-belt": {
      heading: "行星形成後留下的岩石遺跡",
      paragraphs: ["小行星帶分布於火星與木星軌道之間。木星強大的引力擾動使該區域的岩石物質難以聚合成單一行星，留下眾多大小不一的天體。", "小行星帶並非密集的岩石牆，天體之間有非常大的空間。穀神星、灶神星與智神星是其中最知名的成員。"],
      points: ["總質量不到月球的一半。", "穀神星是帶中最大的天體，也是矮行星。", "隕石研究讓我們能在地球實驗室分析小行星物質。"],
      related: ["ceres", "mars", "jupiter"]
    },
    "kuiper-belt": {
      heading: "海王星之外的冰質天體家園",
      paragraphs: ["柯伊伯帶是海王星軌道以外的環狀區域，聚集著許多太陽系形成時留下的冰質天體。冥王星是其中著名的矮行星之一。", "部分柯伊伯帶天體的軌道會受到海王星影響。這一帶也被認為是許多短週期彗星的來源地。"],
      points: ["距離太陽約 30 至 50 天文單位。", "包含多種冰質小天體與矮行星。", "NASA 新視野號已飛掠冥王星及柯伊伯帶天體 Arrokoth。"],
      related: ["pluto", "neptune", "halley"]
    },
    "oort-cloud": {
      heading: "太陽系最遙遠的理論邊疆",
      paragraphs: ["歐特雲是天文學家推論存在於太陽系遠方的球狀冰質天體雲，可能包圍整個行星系統。它的天體受到太陽引力束縛，分布範圍遠超過行星軌道。", "鄰近恆星的引力或銀河系潮汐可能擾動歐特雲天體，使部分彗星轉入靠近太陽的長週期軌道。歐特雲目前尚未被直接觀測到。"],
      points: ["可能距離太陽數千至數萬天文單位。", "被認為是部分長週期彗星的來源。", "旅行者探測器尚未離開歐特雲推測範圍。"],
      related: ["halley", "kuiper-belt", "neptune"]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const profile = profiles[id];
  const story = stories[id];
  const main = document.getElementById("objectContent");
  const planetIds = data.planetIds;
  const homeSection = id === "sun" ? "sun" : planetIds.includes(id) ? "worlds" : "beyond";

  if (!profile || !story) {
    document.title = "找不到天體 — 星際漫遊";
    main.innerHTML = `<section class="object-not-found"><div class="eyebrow">OBJECT NOT FOUND</div><h1>這個天體暫時不在星圖上。</h1><p>請從太陽系首頁選擇天體，繼續你的探索旅程。</p><a class="text-link" href="index.html#beyond">返回太陽系首頁　→</a></section>`;
    return;
  }

  const relatedLinks = story.related.map(relatedId => {
    const related = profiles[relatedId];
    return `<a class="related-card" href="object.html?id=${encodeURIComponent(relatedId)}"><span class="related-dot" style="--planet-color:${related.color};--planet-gradient:${related.gradient}"></span><span><small>${related.en}</small><strong>${related.name}</strong></span><span class="related-arrow" aria-hidden="true">↗</span></a>`;
  }).join("");
  const facts = story.points.map((point, index) => `<li><span class="point-number">0${index + 1}</span><span>${point}</span></li>`).join("");
  const stats = [
    [profile.distanceLabel, profile.distance],
    [profile.yearLabel, profile.year],
    [profile.diameterLabel, profile.diameter],
    ["天體分類", profile.type]
  ].map(([label, value]) => `<div class="object-stat"><span>${label}</span><strong>${value}</strong></div>`).join("");
  const paragraphs = story.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("");
  const parent = profile.category === "行星檔案" ? "行星世界" : profile.category === "恆星檔案" ? "恆星" : profile.category === "衛星檔案" ? "天然衛星" : profile.category;

  document.title = `${profile.name} — 星際漫遊`;
  document.querySelector('meta[name="description"]').content = `${profile.name}的詳細介紹：${profile.description}`;
  main.innerHTML = `
    <nav class="breadcrumbs" aria-label="麵包屑導覽"><a href="index.html">太陽系</a><span aria-hidden="true">/</span><a href="index.html#${homeSection}">${parent}</a><span aria-hidden="true">/</span><span aria-current="page">${profile.name}</span></nav>
    <section class="object-hero" style="--object-color:${profile.color}">
      <div class="object-hero-copy"><div class="eyebrow">${profile.en}</div><div class="object-category">${profile.category}</div><h1>${profile.name}</h1><p class="object-lead">${profile.description}</p><a class="hero-back-link" href="index.html#${homeSection}">← 返回太陽系探索</a></div>
      <div class="object-hero-art" aria-hidden="true"><div class="object-aura"></div><div class="object-orb" style="--planet-gradient:${profile.gradient};--planet-color:${profile.color}"></div><span class="object-orbit-line orbit-line-a"></span><span class="object-orbit-line orbit-line-b"></span><span class="object-spark spark-a">✦</span><span class="object-spark spark-b">·</span><span class="object-spark spark-c">·</span></div>
    </section>
    <section class="object-stats" aria-label="${profile.name}基本資料">${stats}</section>
    <section class="object-story"><div class="detail-section-title"><div class="eyebrow">A CLOSER LOOK</div><h2>${story.heading}</h2></div><div class="story-copy">${paragraphs}</div></section>
    <section class="object-points"><div class="detail-section-title"><div class="eyebrow">DID YOU KNOW?</div><h2>值得記住的探索線索</h2></div><ul>${facts}</ul><div class="object-fact"><span aria-hidden="true">✦</span><p>${profile.fact}</p></div></section>
    <section class="related-section"><div class="detail-section-title"><div class="eyebrow">CONTINUE EXPLORING</div><h2>延伸探索</h2><p>繼續認識與${profile.name}相關的太陽系天體。</p></div><div class="related-grid">${relatedLinks}</div></section>
    <section class="object-end"><span aria-hidden="true">✳</span><div><strong>宇宙的故事，還在繼續。</strong><p>回到太陽系探索頁，發現更多等待認識的世界。</p></div><a class="text-link" href="index.html#${homeSection}">回到太陽系首頁　→</a></section>`;
})();

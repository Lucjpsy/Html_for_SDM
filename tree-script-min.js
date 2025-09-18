// Qualtrics树状图JavaScript文件 - 优化版本
(function() {
  'use strict';
  
  // 数据存储 - 使用压缩的JSON格式
  const data = {
    zh: {
      title: "老年糖尿病患者知识域标签体系",
      items: [
        {text: "1. 診斷相關標籤", level: 2, children: [
          {text: "1.1 診斷標準", level: 3, children: []},
          {text: "1.2 症狀", level: 3, children: [
            {text: "1.2.1 口乾多飲", level: 4, children: []},
            {text: "1.2.2 小便頻密", level: 4, children: []},
            {text: "1.2.3 容易肚餓", level: 4, children: []},
            {text: "1.2.4 體重下降", level: 4, children: []}
          ]},
          {text: "1.3 化驗檢查", level: 3, children: [
            {text: "1.3.1 隨機血糖", level: 4, children: []},
            {text: "1.3.2 空腹血糖", level: 4, children: []},
            {text: "1.3.3 餐後2小時血糖（糖水測試）", level: 4, children: []},
            {text: "1.3.4 糖化血紅素（HbA1c）", level: 4, children: []}
          ]}
        ]},
        {text: "2. 治療相關標籤", level: 2, children: [
          {text: "2.1 生活習慣調整", level: 3, children: [
            {text: "2.1.1 醫學營養治療", level: 4, children: [
              {text: "2.1.1.1 營養狀況評估", level: 5, children: []},
              {text: "2.1.1.2 餐單安排計劃", level: 5, children: []},
              {text: "2.1.1.3 營養治療目標", level: 5, children: []}
            ]},
            {text: "2.1.2 運動治療", level: 4, children: [
              {text: "2.1.2.1 運動前健康評估", level: 5, children: []},
              {text: "2.1.2.2 運動類型（帶氧運動、阻力訓練）", level: 5, children: []},
              {text: "2.1.2.3 運動強度", level: 5, children: []}
            ]}
          ]},
          {text: "2.2 藥物治療", level: 3, children: [
            {text: "2.2.1 藥物大類", level: 4, children: [
              {text: "2.2.1.1 雙胍類（如：二甲雙胍）", level: 5, children: []},
              {text: "2.2.1.2 磺脲類（如：格列齊特）", level: 5, children: []},
              {text: "2.2.1.3 DPP-4抑制劑（如：西格列汀）", level: 5, children: []},
              {text: "2.2.1.4 SGLT2抑制劑（如：恩格列淨）", level: 5, children: []},
              {text: "2.2.1.5 GLP-1受體激動劑（如：利拉魯肽）", level: 5, children: []},
              {text: "2.2.1.6 胰島素", level: 5, children: [
                {text: "2.2.1.6.1 長效胰島素", level: 6, children: []},
                {text: "2.2.1.6.2 速效胰島素", level: 6, children: []},
                {text: "2.2.1.6.3 預混胰島素", level: 6, children: []}
              ]},
              {text: "2.2.1.7 其他類", level: 5, children: []}
            ]},
            {text: "2.2.2 通用藥物屬性", level: 4, children: [
              {text: "2.2.2.1 藥物獲取途徑", level: 5, children: []},
              {text: "2.2.2.2 藥物費用與資助", level: 5, children: []},
              {text: "2.2.2.3 藥物功效與作用原理", level: 5, children: []}
            ]},
            {text: "2.2.3 藥物益處", level: 4, children: [
              {text: "2.2.3.1 對血糖控制嘅幫助（強效/中效/弱效；空腹/餐後）", level: 5, children: []},
              {text: "2.2.3.2 對心血管嘅保護作用", level: 5, children: []},
              {text: "2.2.3.3 對體重管理嘅影響（減重/中性/增重）", level: 5, children: []},
              {text: "2.2.3.4 對腎臟保護作用", level: 5, children: []},
              {text: "2.2.3.5 低血糖風險（低/中/高）", level: 5, children: []},
              {text: "2.2.3.6 對生活質素嘅正面影響", level: 5, children: [
                {text: "2.2.3.6.1 身體健康與舒適度", level: 6, children: []},
                {text: "2.2.3.6.2 日常活動與自理能力", level: 6, children: []},
                {text: "2.2.3.6.3 生活安排與便利性", level: 6, children: []},
                {text: "2.2.3.6.4 經濟負擔與壓力", level: 6, children: []},
                {text: "2.2.3.6.5 工作與事業發展", level: 6, children: []},
                {text: "2.2.3.6.6 個人嗜好與社交生活", level: 6, children: []},
                {text: "2.2.3.6.7 自我形象與社會標籤", level: 6, children: []},
                {text: "2.2.3.6.8 家庭關係與角色", level: 6, children: []},
                {text: "2.2.3.6.9 情緒與心理健康", level: 6, children: []}
              ]}
            ]}
          ]}
        ]},
        {text: "3. 併發症相關標籤", level: 2, children: [
          {text: "3.1 急性併發症", level: 3, children: [
            {text: "3.1.1 低血糖", level: 4, children: [
              {text: "3.1.1.1 症狀識別與認知(手震、出汗、心悸等)", level: 5, children: []},
              {text: "3.1.1.2 發生機制與原理(藥物過量、食唔夠嘢等)", level: 5, children: []},
              {text: "3.1.1.3 未來風險預測(復發風險、嚴重程度)", level: 5, children: []},
              {text: "3.1.1.4 檢查與診斷方法(血糖檢測頻率、連續血糖監測使用)", level: 5, children: []},
              {text: "3.1.1.5 風險與誘發因素(藥物種類、腎功能狀況)", level: 5, children: []},
              {text: "3.1.1.6 治療與管理方案(15-15法則、升糖素使用)", level: 5, children: []},
              {text: "3.1.1.7 預後與康復評估(認知功能影響、生活質素)", level: 5, children: []}
            ]},
            {text: "3.1.2 高血糖危象", level: 4, children: [
              {text: "3.1.2.1 症狀識別與認知(口渴尿頻、意識改變等)", level: 5, children: []},
              {text: "3.1.2.2 發生機制與原理(胰島素不足、壓力因素)", level: 5, children: []},
              {text: "3.1.2.3 未來風險預測(器官損害風險)", level: 5, children: []},
              {text: "3.1.2.4 檢查與診斷方法(酮體檢測、血氣分析)", level: 5, children: []},
              {text: "3.1.2.5 風險與誘發因素(治療中斷、感染)", level: 5, children: []},
              {text: "3.1.2.6 治療與管理方案(補水、胰島素調整)", level: 5, children: []},
              {text: "3.1.2.7 預後與康復評估(死亡率、功能恢復)", level: 5, children: []}
            ]}
          ]},
          {text: "3.2 慢性併發症", level: 3, children: [
            {text: "3.2.1 糖尿病腎病", level: 4, children: [
              {text: "3.2.1.1 症狀識別與認知（水腫、尿毒症症狀）", level: 5, children: []},
              {text: "3.2.1.2 發生機制與原理（腎小球損傷、纖維化）", level: 5, children: []},
              {text: "3.2.1.3 未來風險預測（腎功能衰退速度）", level: 5, children: []},
              {text: "3.2.1.4 檢查與診斷方法（尿微量白蛋白檢測）", level: 5, children: []},
              {text: "3.2.1.5 風險與誘發因素（血糖控制、血壓）", level: 5, children: []},
              {text: "3.2.1.6 治療與管理方案（血糖血壓控制、RAAS抑制劑）", level: 5, children: []},
              {text: "3.2.1.7 預後與康復評估（末期腎病風險）", level: 5, children: []}
            ]},
            {text: "3.2.2 糖尿病視網膜病變", level: 4, children: [
              {text: "3.2.2.1 症狀識別與認知（視力模糊、飛蚊症）", level: 5, children: []},
              {text: "3.2.2.2 發生機制與原理（微血管損傷、新生血管）", level: 5, children: []},
              {text: "3.2.2.3 未來風險預測（視力喪失風險）", level: 5, children: []},
              {text: "3.2.2.4 檢查與診斷方法（眼底檢查）", level: 5, children: []},
              {text: "3.2.2.5 風險與誘發因素（病史長短、血糖控制）", level: 5, children: []},
              {text: "3.2.2.6 治療與管理方案（激光治療、抗VEGF藥物）", level: 5, children: []},
              {text: "3.2.2.7 預後與康復評估（視力預後）", level: 5, children: []}
            ]}
          ]}
        ]},
        {text: "4. 自我管理相關標籤", level: 2, children: [
          {text: "4.1 血糖監測", level: 3, children: [
            {text: "4.1.1 檢測頻率與時機困惑", level: 4, children: []},
            {text: "4.1.2 儀器操作困難（視力、手部功能）", level: 4, children: []},
            {text: "4.1.3 數值解讀與意義理解", level: 4, children: []}
          ]},
          {text: "4.2 胰島素使用", level: 3, children: [
            {text: "4.2.1 注射技術困難", level: 4, children: []},
            {text: "4.2.2 劑量調整困惑", level: 4, children: []},
            {text: "4.2.3 胰島素泵使用複雜性", level: 4, children: []}
          ]},
          {text: "4.3 飲食管理", level: 3, children: [
            {text: "4.3.1 食物選擇困惑", level: 4, children: []},
            {text: "4.3.2 份量控制困難", level: 4, children: []},
            {text: "4.3.3 出外用膳挑戰", level: 4, children: []}
          ]}
        ]},
        {text: "5. 心理社交相關標籤", level: 2, children: [
          {text: "5.1 情緒與心理", level: 3, children: [
            {text: "5.1.1 焦慮", level: 4, children: []},
            {text: "5.1.2 抑鬱", level: 4, children: []},
            {text: "5.1.3 恐懼", level: 4, children: []},
            {text: "5.1.4 失去尊嚴", level: 4, children: []},
            {text: "5.1.5 疾病接受困難", level: 4, children: []}
          ]},
          {text: "5.2 社會支援", level: 3, children: [
            {text: "5.2.1 家庭支援充足性", level: 4, children: []},
            {text: "5.2.2 照顧負擔擔憂", level: 4, children: []},
            {text: "5.2.3 社區資源獲取", level: 4, children: []}
          ]}
        ]},
        {text: "6. 溝通與信息素養", level: 2, children: [
          {text: "6.1 信息品質評估", level: 3, children: [
            {text: "6.1.1 虛假與誤導信息", level: 4, children: []},
            {text: "6.1.2 信息過載", level: 4, children: []},
            {text: "6.1.3 科學證據等級", level: 4, children: []}
          ]},
          {text: "6.2 醫患溝通技巧", level: 3, children: [
            {text: "6.2.1 就診時間管理", level: 4, children: []},
            {text: "6.2.2 症狀與訴求表達", level: 4, children: []},
            {text: "6.2.3 專業術語", level: 4, children: [
              {text: "6.2.3.1 診斷名詞（如：「周圍神經病變」即係咩意思？）", level: 5, children: []},
              {text: "6.2.3.2 藥物名稱與機制（如：「SGLT2抑制劑」點樣發揮作用？）", level: 5, children: []},
              {text: "6.2.3.3 治療方案術語（如：「胰島素強化治療」係點樣？）", level: 5, children: []},
              {text: "6.2.3.4 檢驗指標解讀", level: 5, children: [
                {text: "6.2.3.4.1 化驗項目定義與臨床意義（如：HbA1c、eGFR、ACR是什麼？）", level: 6, children: []},
                {text: "6.2.3.4.2 數值解讀與目標範圍（如：我的數值6.5%代表好定唔好？）", level: 6, children: []},
                {text: "6.2.3.4.3 結果單位解釋與換算（如：mmol/L、mg/dL代表什麼？）", level: 6, children: []},
                {text: "6.2.3.4.4 參考範圍的個體化應用（如：點解個參考範圍咁闊？）", level: 6, children: []}
              ]}
            ]}
          ]}
        ]}
      ]
    },
    en: {
      title: "Elderly Diabetes Patient Concerns Tag System",
      items: [
        {text: "1. Diagnostic Related Tags", level: 2, children: [
          {text: "1.1 Diagnostic Criteria Questions", level: 3, children: []},
          {text: "1.2 Symptom Questions", level: 3, children: [
            {text: "1.2.1 Dry mouth and excessive thirst", level: 4, children: []},
            {text: "1.2.2 Frequent urination", level: 4, children: []},
            {text: "1.2.3 Increased hunger", level: 4, children: []},
            {text: "1.2.4 Weight loss", level: 4, children: []}
          ]},
          {text: "1.3 Laboratory Test Questions", level: 3, children: [
            {text: "1.3.1 Random blood glucose", level: 4, children: []},
            {text: "1.3.2 Fasting blood glucose", level: 4, children: []},
            {text: "1.3.3 2-hour postprandial glucose (glucose tolerance test)", level: 4, children: []},
            {text: "1.3.4 Glycated hemoglobin (HbA1c)", level: 4, children: []}
          ]}
        ]},
        {text: "2. Treatment Tags", level: 2, children: [
          {text: "2.1 Lifestyle modification questions", level: 3, children: [
            {text: "2.1.1 Medical nutrition therapy", level: 4, children: [
              {text: "2.1.1.1 Nutritional status assessment", level: 5, children: []},
              {text: "2.1.1.2 Meal planning and menu arrangements", level: 5, children: []},
              {text: "2.1.1.3 Nutrition therapy goals", level: 5, children: []}
            ]},
            {text: "2.1.2 Exercise therapy", level: 4, children: [
              {text: "2.1.2.1 Pre-exercise health assessment", level: 5, children: []},
              {text: "2.1.2.2 Exercise type (aerobic, resistance)", level: 5, children: []},
              {text: "2.1.2.3 Exercise intensity", level: 5, children: []}
            ]}
          ]},
          {text: "2.2 Medication therapy questions", level: 3, children: [
            {text: "2.2.1 Drug classes", level: 4, children: [
              {text: "2.2.1.1 Biguanides (e.g., metformin)", level: 5, children: []},
              {text: "2.2.1.2 Sulfonylureas (e.g., gliclazide)", level: 5, children: []},
              {text: "2.2.1.3 DPP-4 inhibitors (e.g., sitagliptin)", level: 5, children: []},
              {text: "2.2.1.4 SGLT2 inhibitors (e.g., empagliflozin)", level: 5, children: []},
              {text: "2.2.1.5 GLP-1 receptor agonists (e.g., liraglutide)", level: 5, children: []},
              {text: "2.2.1.6 Insulin", level: 5, children: [
                {text: "2.2.1.6.1 Long-acting insulin", level: 6, children: []},
                {text: "2.2.1.6.2 Rapid-acting insulin", level: 6, children: []},
                {text: "2.2.1.6.3 Premixed insulin", level: 6, children: []}
              ]},
              {text: "2.2.1.7 Other classes", level: 5, children: []}
            ]}
          ]}
        ]}
      ]
    }
  };

  let currentLang = 'zh';

  // 渲染树结构
  function renderTree(node, parentLevel = 1) {
    const actualLevel = node.level || parentLevel;
    const labelClass = `tree-label level${actualLevel}`;
    
    if (!node.children || node.children.length === 0) {
      return `<li class="leaf"><span class="${labelClass}">${node.text}</span></li>`;
    }
    
    const collapsed = actualLevel >= 3 ? 'collapsed' : 'expanded';
    const childrenHtml = node.children.map(child => renderTree(child, actualLevel + 1)).join('');
    
    return `<li class="${collapsed}">
      <span class="${labelClass}">${node.text}</span>
      <ul>${childrenHtml}</ul>
    </li>`;
  }

  // 渲染整个树
  function renderFromData() {
    const treeElement = document.getElementById('tree');
    if (!treeElement) return;
    
    const currentData = data[currentLang];
    const treeHtml = currentData.items.map(item => renderTree(item)).join('');
    treeElement.innerHTML = `<ul>${treeHtml}</ul>`;
    
    bindExpandCollapseEvents();
  }

  // 绑定展开/收缩事件
  function bindExpandCollapseEvents() {
    const treeElement = document.getElementById('tree');
    if (!treeElement) return;
    
    const newTreeElement = treeElement.cloneNode(true);
    treeElement.parentNode.replaceChild(newTreeElement, treeElement);
    
    document.getElementById('tree').addEventListener('click', function(e) {
      if (e.target.classList.contains('tree-label')) {
        const li = e.target.parentElement;
        if (li.classList.contains('leaf')) return;
        li.classList.toggle('collapsed');
        li.classList.toggle('expanded');
      }
    });
  }

  // 背景切换
  window.switchBg = function(mode) {
    const container = document.getElementById('qualtrics-tree-container');
    if (!container) return;
    
    container.classList.remove('bg-dark', 'bg-light', 'bg-white');
    if (mode === 'dark') container.classList.add('bg-dark');
    if (mode === 'light') container.classList.add('bg-light');
    if (mode === 'white') container.classList.add('bg-white');
  };

  // 语言切换
  window.switchLanguage = function(lang) {
    currentLang = lang;
    
    const h2 = document.querySelector('.main-title');
    if (h2) {
      h2.textContent = data[lang].title;
    }
    
    const zhBtn = document.getElementById('lang-zh');
    const enBtn = document.getElementById('lang-en');
    if (zhBtn && enBtn) {
      zhBtn.classList.remove('lang-active');
      enBtn.classList.remove('lang-active');
      if (lang === 'zh') {
        zhBtn.classList.add('lang-active');
      } else {
        enBtn.classList.add('lang-active');
      }
    }
    
    renderFromData();
  };

  // 初始化
  function init() {
    renderFromData();
  }

  // 等待DOM加载
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

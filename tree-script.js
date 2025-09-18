// 背景色切换函数
function switchBg(mode) {
  document.body.classList.remove('bg-dark', 'bg-light', 'bg-white');
  if (mode === 'dark') document.body.classList.add('bg-dark');
  if (mode === 'light') document.body.classList.add('bg-light');
  if (mode === 'white') document.body.classList.add('bg-white');
}

// 读取完整 Markdown 内容（繁體中文）
const mdZh = `
# 老年糖尿病患者知识域标签体系

## 1. 診斷相關標籤

### 1.1 **診斷標準**

### 1.2 **症狀**

#### 1.2.1 口乾多飲

#### 1.2.2 小便頻密

#### 1.2.3 容易肚餓

#### 1.2.4 體重下降

### 1.3 **化驗檢查**

#### 1.3.1 隨機血糖

#### 1.3.2 空腹血糖

#### 1.3.3 餐後2小時血糖（糖水測試）

#### 1.3.4 糖化血紅素（HbA1c）
`;

// English version (complete translation)
const mdEn = `
# Elderly Diabetes Patient Concerns Tag System

## 1. Diagnostic Related Tags

### 1.1 **Diagnostic Criteria Questions**

### 1.2 **Symptom Questions**

#### 1.2.1 Dry mouth and excessive thirst

#### 1.2.2 Frequent urination

#### 1.2.3 Increased hunger

#### 1.2.4 Weight loss

### 1.3 **Laboratory Test Questions**

#### 1.3.1 Random blood glucose

#### 1.3.2 Fasting blood glucose

#### 1.3.3 2-hour postprandial glucose (glucose tolerance test)

#### 1.3.4 Glycated hemoglobin (HbA1c)
`;

// 当前语言内容引用
let currentLang = 'zh';
let currentMd = mdZh;

// On page load, set default language to Traditional Chinese and update button highlight
window.addEventListener('DOMContentLoaded', function() {
  // 强制初始化，确保内容被渲染
  currentLang = 'zh';
  currentMd = mdZh;
  // 更新页面头部标题
  const h2 = document.querySelector('.main-title');
  h2.textContent = '老年糖尿病患者知识域标签体系';
  // 更新语言按钮样式
  document.getElementById('lang-zh').classList.add('lang-active');
  document.getElementById('lang-en').classList.remove('lang-active');
  // 渲染内容
  renderFromCurrentMd();
});

// 解析 Markdown 标题为树结构
function parseTree(md) {
  const lines = md.split('\n').filter(line => /^#{1,6}\s/.test(line));
  const root = {children: []};
  const stack = [{level: 0, node: root}];
  for (let line of lines) {
    const match = line.match(/^(#{1,6})\s+(.*)$/);
    if (!match) continue;
    const level = match[1].length;
    const text = match[2].replace(/\*\*/g, '').trim();
    const node = {text, children: [], level};
    while (stack.length && stack[stack.length-1].level >= level) stack.pop();
    stack[stack.length-1].node.children.push(node);
    stack.push({level, node});
  }
  return root.children[0]; // 跳过文档标题
}

// 渲染树结构为 HTML
function renderTree(node, parentLevel=1) {
  const actualLevel = node.level || parentLevel;
  const labelClass = `tree-label level${actualLevel}`;
  if (!node.children || node.children.length === 0) {
    return `<li class="leaf"><span class="${labelClass}">${node.text}</span></li>`;
  }
  // 3级标题及以下默认收缩
  const collapsed = actualLevel >= 3 ? 'collapsed' : 'expanded';
  let html = `<li class="${collapsed}">
    <span class="${labelClass}">${node.text}</span>
    <ul>
      ${node.children.map(child => renderTree(child, actualLevel+1)).join('')}
    </ul>
  </li>`;
  return html;
}

// 挂载/渲染树函数（根据 currentMd）
function renderFromCurrentMd() {
  const treeData = parseTree(currentMd);
  document.getElementById('tree').innerHTML = `<ul>${renderTree(treeData)}</ul>`;
  // 重新绑定展开/收缩交互事件
  bindExpandCollapseEvents();
  // 检查是否需要显示滚动提示
  checkScrollHint();
}

// 检查是否需要显示滚动提示
function checkScrollHint() {
  const treeElement = document.getElementById('tree');
  const scrollHint = document.getElementById('scroll-hint');
  
  // 检查内容是否超出容器高度
  if (treeElement.scrollHeight > treeElement.clientHeight) {
    scrollHint.style.display = 'block';
  } else {
    scrollHint.style.display = 'none';
  }
}

// 展开/收缩交互事件绑定
function bindExpandCollapseEvents() {
  // 移除之前的事件监听器（如果存在）
  const treeElement = document.getElementById('tree');
  const newTreeElement = treeElement.cloneNode(true);
  treeElement.parentNode.replaceChild(newTreeElement, treeElement);
  
  // 重新绑定事件
  document.getElementById('tree').addEventListener('click', function(e) {
    if (e.target.classList.contains('tree-label')) {
      const li = e.target.parentElement;
      if (li.classList.contains('leaf')) return;
      li.classList.toggle('collapsed');
      li.classList.toggle('expanded');
      // 展开/收缩后检查滚动提示
      setTimeout(checkScrollHint, 100);
    }
  });
}

// 语言切换
function switchLanguage(lang) {
  currentLang = lang;
  currentMd = (lang === 'en') ? mdEn : mdZh;
  // 更新页面头部标题
  const h2 = document.querySelector('.main-title');
  h2.textContent = (lang === 'en') ? 'Diabetes Patient Concerns Tag System' : '老年糖尿病患者知识域标签体系';
  // 更新右键菜单文本
  document.querySelectorAll('#contextMenu .menu-item').forEach(item => {
    const action = item.getAttribute('data-action');
    const mapping = {
      expand2: {zh: '展开所有2级标签', en: 'Expand all level 2'},
      collapse2: {zh: '收缩所有2级标签', en: 'Collapse all level 2'},
      expand3: {zh: '展开所有3级标签', en: 'Expand all level 3'},
      collapse3: {zh: '收缩所有3级标签', en: 'Collapse all level 3'},
      expand4: {zh: '展开所有4级标签', en: 'Expand all level 4'},
      collapse4: {zh: '收缩所有4级标签', en: 'Collapse all level 4'},
      expand5: {zh: '展开所有5级标签', en: 'Expand all level 5'},
      collapse5: {zh: '收缩所有5级标签', en: 'Collapse all level 5'}
    };
    if (mapping[action]) item.textContent = mapping[action][lang === 'en' ? 'en' : 'zh'];
  });
  // 更新背景色按钮文本
  const bgButtons = document.querySelectorAll('.bg-switch-bar .bg-btn');
  const bgTexts = {
    dark: {zh: '深色', en: 'Dark'},
    light: {zh: '淺色', en: 'Light'},
    white: {zh: '純白', en: 'White'}
  };
  bgButtons.forEach(btn => {
    const bgType = btn.classList.contains('dark') ? 'dark' : 
                  btn.classList.contains('light') ? 'light' : 'white';
    btn.textContent = bgTexts[bgType][lang === 'en' ? 'en' : 'zh'];
  });
  
  // 更新语言按钮样式（高亮当前语言，立体阴影和边框高亮）
  document.getElementById('lang-zh').classList.remove('lang-active');
  document.getElementById('lang-en').classList.remove('lang-active');
  if (lang === 'zh') {
    document.getElementById('lang-zh').classList.add('lang-active');
  } else {
    document.getElementById('lang-en').classList.add('lang-active');
  }
  renderFromCurrentMd();
}

// 右键菜单逻辑
const contextMenu = document.getElementById('contextMenu');

// 菜单位置偏移量设置 - 可以根据实际情况调整这些值
const MENU_OFFSET_X = -410;  // 水平偏移量（像素）
const MENU_OFFSET_Y = -30;  // 垂直偏移量（像素）

document.addEventListener('contextmenu', function(e) {
  // 只在树区域显示菜单
  if (e.target.closest('#tree')) {
    e.preventDefault();
    
    // 先显示菜单以获取其尺寸
    contextMenu.style.display = 'block';
    contextMenu.style.visibility = 'hidden'; // 临时隐藏以获取尺寸
    
    const menuWidth = contextMenu.offsetWidth;
    const menuHeight = contextMenu.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // 获取鼠标位置 - 使用clientX和clientY，但需要考虑滚动偏移
    const mouseX = e.clientX + window.pageXOffset + MENU_OFFSET_X;
    const mouseY = e.clientY + window.pageYOffset + MENU_OFFSET_Y;
    
    // 计算菜单位置，确保不超出屏幕边界
    let finalX = mouseX;
    let finalY = mouseY;
    
    // 如果菜单会超出右边界，则向左显示
    if (mouseX + menuWidth > windowWidth + window.pageXOffset) {
      finalX = mouseX - menuWidth;
    }
    
    // 如果菜单会超出下边界，则向上显示
    if (mouseY + menuHeight > windowHeight + window.pageYOffset) {
      finalY = mouseY - menuHeight;
    }
    
    // 确保菜单不会超出左边界和上边界
    if (finalX < window.pageXOffset) finalX = window.pageXOffset + 10;
    if (finalY < window.pageYOffset) finalY = window.pageYOffset + 10;
    
    // 设置菜单位置并显示
    contextMenu.style.left = finalX + 'px';
    contextMenu.style.top = finalY + 'px';
    contextMenu.style.visibility = 'visible';
  } else {
    contextMenu.style.display = 'none';
  }
});

document.addEventListener('click', function(e) {
  if (!e.target.closest('#contextMenu')) {
    contextMenu.style.display = 'none';
    contextMenu.style.visibility = 'visible'; // 重置visibility属性
  }
});

// 展开/收缩所有指定级别标签（无论父级是否展开，强制设置当前级别li的class）
function setExpandCollapse(level, expand) {
  // 如果是展开5级标签，先展开所有2~4级标签
  if (level === 5 && expand) {
    [2,3,4].forEach(lv => {
      document.querySelectorAll(`#tree .level${lv}`).forEach(label => {
        const li = label.parentElement;
        if (li.classList.contains('leaf')) return;
        li.classList.remove('collapsed');
        li.classList.add('expanded');
      });
    });
  }
  
  const labels = document.querySelectorAll(`#tree .level${level}`);
  labels.forEach(label => {
    const li = label.parentElement;
    if (li.classList.contains('leaf')) return;
    li.classList.remove('collapsed', 'expanded');
    li.classList.add(expand ? 'expanded' : 'collapsed');
    // 若展开，递归展开所有父级li
    if (expand) {
      let parentLi = li.parentElement.closest('li');
      while (parentLi) {
        parentLi.classList.remove('collapsed');
        parentLi.classList.add('expanded');
        parentLi = parentLi.parentElement.closest('li');
      }
    }
  });
}

contextMenu.addEventListener('click', function(e) {
  if (!e.target.classList.contains('menu-item')) return;
  const action = e.target.getAttribute('data-action');
  if (action === 'expand2') setExpandCollapse(2, true);
  if (action === 'collapse2') setExpandCollapse(2, false);
  if (action === 'expand3') setExpandCollapse(3, true);
  if (action === 'collapse3') setExpandCollapse(3, false);
  if (action === 'expand4') setExpandCollapse(4, true);
  if (action === 'collapse4') setExpandCollapse(4, false);
  if (action === 'expand5') setExpandCollapse(5, true);
  if (action === 'collapse5') setExpandCollapse(5, false);
  contextMenu.style.display = 'none';
  // 右键菜单操作后检查滚动提示
  setTimeout(checkScrollHint, 200);
});

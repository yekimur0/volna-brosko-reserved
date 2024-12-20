export function formTabs (target) {
    const currentID = target.dataset.tariff;
    const activeTab = document.querySelector('.form-tariff-tab.active');
    const nextTab = document.querySelector(`[data-tab-tariff="${currentID}"]`);
    const activeBtn = document.querySelector('.form-tariff-btn.active');



    if (activeTab) activeTab.classList.remove('active');
    if (activeBtn) activeBtn.classList.remove('active');
    nextTab.classList.add('active');
    target.classList.add('active');
}
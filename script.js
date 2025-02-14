document.addEventListener('DOMContentLoaded', function() {
    // Modal for personal return page
    var openModalBtn = document.getElementById('openModalBtn');
    var modalOverlay = document.getElementById('modalOverlay');
    var closeModalBtn = document.getElementById('closeModalBtn');
    
    if(openModalBtn){
      openModalBtn.addEventListener('click', function(){
        modalOverlay.style.display = 'flex';
      });
    }
    
    if(closeModalBtn){
      closeModalBtn.addEventListener('click', function(){
        modalOverlay.style.display = 'none';
      });
    }
  
    // Modal for business return page
    var openModalBtn2 = document.getElementById('openModalBtn2');
    var modalOverlay2 = document.getElementById('modalOverlay2');
    var closeModalBtn2 = document.getElementById('closeModalBtn2');
    
    if(openModalBtn2){
      openModalBtn2.addEventListener('click', function(){
        modalOverlay2.style.display = 'flex';
      });
    }
    
    if(closeModalBtn2){
      closeModalBtn2.addEventListener('click', function(){
        modalOverlay2.style.display = 'none';
      });
    }
  
    // Personal fee calculator functionality with base rate and additional W2 forms
var calcButton = document.getElementById('calcButton');
var calcResult = document.getElementById('calcResult');
if(calcButton){
  calcButton.addEventListener('click', function(){
    var w2Count = parseInt(document.getElementById('w2Count').value) || 0;
    var extraStates = parseInt(document.getElementById('extraStates').value) || 0;
    
    var fee = 0;
    if(w2Count > 0) {
      fee = 200; // Base rate for one W2 form
      if(w2Count > 1){
        fee += (w2Count - 1) * 15; // $15 for each additional form
      }
    }
    fee += (extraStates * 30); // Adding extra state fees (if applicable)
    
    calcResult.textContent = 'Estimated Fee: $' + fee;
  });
}
  
    // Business fee calculator functionality with different base fees for business types
var calcBusinessButton = document.getElementById('calcBusinessButton');
var businessCalcResult = document.getElementById('businessCalcResult');

if (calcBusinessButton) {
  calcBusinessButton.addEventListener('click', function() {
    var businessType = document.getElementById('businessType').value;
    var formsCount = parseInt(document.getElementById('formsCount').value) || 0;
    
    var baseFee;
    switch (businessType) {
      case 'LLC':
        baseFee = 250;
        break;
      case 'S-Corp':
        baseFee = 350;
        break;
      // Optionally, add cases for C-Corp or Partnership if needed:
      case 'C-Corp':
        baseFee = 400;
        break;
      case 'Partnership':
        baseFee = 300;
        break;
      default:
        baseFee = 250; // Default fee if none of the above matches
    }
    
    // Calculate the total fee, e.g., adding extra fees per additional form
    var fee = baseFee + (formsCount * 25);
    businessCalcResult.textContent = 'Estimated Business Fee: $' + fee;
  });
}

  
    // Modal for Get Started selection
var getStartedBtn = document.getElementById('getStartedBtn');
var getStartedModal = document.getElementById('getStartedModal');
var closeGetStartedModal = document.getElementById('closeGetStartedModal');

if(getStartedBtn){
  getStartedBtn.addEventListener('click', function(e) {
    e.preventDefault();
    getStartedModal.style.display = 'flex';
  });
}

if(closeGetStartedModal){
  closeGetStartedModal.addEventListener('click', function(){
    getStartedModal.style.display = 'none';
  });
}

    // FAQ accordion functionality
    var faqTitles = document.querySelectorAll('.faq-title');
    faqTitles.forEach(function(title) {
      title.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });
  });
  
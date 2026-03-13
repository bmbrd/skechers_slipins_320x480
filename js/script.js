// Frame switch
const frame1 = document.getElementById('frame1');
const frame1Header = document.getElementById('frame1Header');
const frame2 = document.getElementById('frame2');
const frame2Header = document.getElementById('frame2Header');
let btnVal = '';

manageHeader();

const buttons = document.querySelectorAll('#frame1 .buttons button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    btnVal = btn.dataset.btn;
    assignAssets(btnVal);
    frame1.classList.remove('active');
    frame2.classList.add('active');
    frame2Header.textContent = btn.textContent;
  });
});

// Back arrow
const backArrow = document.getElementById('backArrow');
backArrow.addEventListener('click', () => {
  // frame2.classList.remove('active');
  // frame1.classList.add('active');
  location.reload();
});

// Buy now button
const buyNow = document.getElementById('buyNow');
buyNow.addEventListener('click', () => {
  window.open('https://www.skechers.co.uk/skechers-slip-ins/', '_blank');
});

// Assign img assets.
// frame 2
function assignAssets(btnVal){  	
	// Thumbnail click for frame 2
	const thumbnails = document.querySelectorAll('.thumb');
	const displayImg = document.getElementById('displayImg');
	let getOldDisplayImg = '';
	displayImg.src = 'assets/'+btnVal+'/1.avif';
	let thumbToDis = 1;
	thumbnails.forEach(thumb => {
		thumbToDis++;
		thumb.src = 'assets/'+btnVal+'/'+ thumbToDis +'.avif';
		thumb.addEventListener('click', () => {
			getOldDisplayImg = displayImg.src;
			displayImg.src = thumb.src;
			thumb.src = getOldDisplayImg;
			});
	});

	// View more link
	const viewMore = document.getElementById('viewMore');
	switch(btnVal)
  	{
  		case 'womens':
  			viewMore.href = 'https://www.skechers.co.uk/women/shoes/slip-ins-hands-free/';
  			break;
  		case 'mens' :
  			viewMore.href = 'https://www.skechers.co.uk/men/shoes/slip-ins-hands-free/';
  			break;
  		default:
  			viewMore.href = 'https://www.skechers.co.uk/kids/collections/kids-hands-free-slip-ins/';
  			break;
  	}
  }


// Manage the header text 
function manageHeader() {
	// Get current date and time
	const now = new Date();
	// weekday AM
	// const now = new Date("2026-03-09 00:00:00");
	// weekday PM
	// const now = new Date("2026-03-09 12:00:00");	
	// weekend AM
	// const now = new Date("2026-03-14 00:00:00");
	// weekend pm
	// const now = new Date("2026-03-14 12:00:00");

	// Get day of week (0 = Sunday, 1 = Monday, ... 6 = Saturday)
	const day = now.getDay();

	// Get current time as hours
	// const hours = now.getHours();
	const hours = now.getHours();

	if(weekend(day) == true && morning(hours) == true){
		frame1Header.innerHTML = 'Start Your Weekend in Comfort.';
	}
	else if(weekend(day) == true && morning(hours) == false){
		frame1Header.innerHTML = 'Make the Most of Your Weekend Afternoon.';
	}
	else if(weekend(day) == false && morning(hours) == true){
		frame1Header.innerHTML = 'Weekday Rush Made Easy.';
	}
	else{
		frame1Header.innerHTML = 'Weekday After-Work Errands? Just Slip-In.';
	}
}

function weekend(day){

	 if(day == 0 || day == 6){
		return true;
	}
	else{  	
		return false;
	}
}

function morning(hours){

	 if( hours < 12){	 	
	 	return true;
	 }
	 else{
	 	return false;
	 }
}


const slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {

  slides[current].classList.remove('active');

  current++;
  if(current >= slides.length){
    current = 0;
  }

  slides[current].classList.add('active');
}

setInterval(showNextSlide, 3000);
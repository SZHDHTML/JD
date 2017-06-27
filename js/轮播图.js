window.onload = function() {
	var oBox = document.getElementById('box');
	var aLi = oBox.getElementsByTagName('ul')[1].getElementsByTagName('li');
	var oUl = oBox.getElementsByTagName('ul')[0];
	var aLiImg = oUl.getElementsByTagName('li');
	var oPrev = document.getElementById('l_arrow');
	var oNext = document.getElementById('r_arrow');
	var now = 0;
	oUl.style.width = aLiImg.length * aLiImg[0].offsetWidth + 'px';
	for(var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onmouseover = function() {
			now = this.index;
			tab();
		}
	}
	function tab() {
		for(var i = 0; i < aLi.length; i++) {
			aLi[i].className = '';
			aLiImg[i].style.display = 'none';
		}
		aLiImg[now].style.opacity = 0;
		aLi[now].className = 'on';
		aLiImg[now].style.display = 'block';
		startMove(aLiImg[now], {
			opacity: 100
		})
	}
	oPrev.onclick = function() {
		now--;
		if(now == -1) {
			now = aLi.length - 1;
		}
		tab();
	}

	oNext.onclick = function() {
		now++;
		if(now == aLi.length) {
			now = 0;
		}
		tab();
	}
	var timer = setInterval(oNext.onclick, 3000);
	oBox.onmouseover = function() {
		oPrev.style.display = 'block';
		oPrev.style.background = 'rgba(0,0,0,.1)';
		oNext.style.display = 'block';
		oNext.style.background = 'rgba(0,0,0,.1)';
		clearInterval(timer);
	}
	oBox.onmouseout = function() {
		oPrev.style.display = 'none';
		oNext.style.display = 'none';
		timer = setInterval(oNext.onclick, 3000);
	}
}
'use strict';

function titleClickHandler(event){
	event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');


  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* [IN PROGRESS] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  	activeLink.classList.add('active');
  

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.titles a');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}
  
  /* find the correct article using the selector (value of 'href' attribute) */
  const articleSelector = clickedElement.getAttribute('#article-1');
	console.log('Link was clicked!');
const targetArticle = document.querySelector('#article-1');
	console.log('Link was clicked!');

  /* add class 'active' to the correct article */
console.log('clickedElement:', clickedElement);
  	activeArticle.classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
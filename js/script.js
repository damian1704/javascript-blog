'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');


  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');


  /* [DONE] add class 'active' to the clicked link */
	console.log('clickedElement:', clickedElement);
	activeLink.classList.add('active');
}

  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.titles a');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = document.querySelectorAll('href');
  articleSelector = clickedElement.getAttribute('#article-1');
  console.log('articleSelector');

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector('#article-1');
  console.log('article-1');

  /* [DONE] add class 'active' to the correct article */
  console.log('clickedElement:', clickedElement);
  activeArticle.classList.add('active');

}

const links = document.querySelectorAll('.titles a');
console.log('links');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}


const optArticleSelector = '.post',,
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* [DONE] remove contents of titleList */
const optTitleListSelector = document.querySelector('.titles');
	titleList.classList.remove('title');
	document.querySelector('title').innerHTML = "";

  /* [DONE] for each article */
  const articles = '.post';
  for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}


  for(let article of articles){
  	let html = '';
  }
  	console.log('');

    /* [DONE] get the article id */
   const articleId = document.querySelectorAll('id');
   articleId = clickedElement.getAttribute('article-1');
   console.log('articleId');


    /* [DONE] find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* [DONE] get the title from the title element */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML');

    /* [DONE] create HTML of the link */
    titleList.innerHTML = titleList.innerHTML + linkHTML;

    /* [DONE] insert link into titleList */
    html = html + linkHTML;
    titleList.insertAdjacentHTML('beforebegin', 'linkHTML');
}

generateTitleLinks();


  
{
  'use strict';
  const templates = {
    articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
    tagLink: Handlebars.compile(document.querySelector('#template-tag-link').innerHTML),
    authorLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
    tagCloudLink: Handlebars.compile(document.querySelector('#template-tag-cloud-link').innerHTML),
  };

  const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;
 
    /* [DONE] remove class 'active' from all article links */
    const activeLinks = document.querySelectorAll('.titles a.active');
  
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorsSelector = '.post-author',
    optTagsListSelector = 'tags.list',
    optCloudClassCount = '5',
    optCloudClassPrefix = 'tag-size-';
   

  const generateTitleLinks = function(customSelector = '') {

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    const articles = document.querySelectorAll(optArticleSelector + customSelector);
  
    /* for each article */
    let html = '';

    for(let article of articles) {

      /* get the article id */
      const articleId = article.getAttribute('id');

      /* find the title element */
    
      /* get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* create HTML of the link */
      const linkHTMLData = {id: articleId, title: articleTitle};
      const linkHTML = templates.articleLink(linkHTMLData);

      /* insert link into html variable */
      html = html + linkHTML;
    
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
  
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  };

  generateTitleLinks();

  const calculateTagsParams = function(tags) {

    const params = {
      min: 10,
      max: 0
    };

    for(let tag in tags){
      console.log(tag + ' is used ' + tags[tag] + ' times'); 

      if(tags[tag] > params.max){
        params.max = tags[tag];{
          return params;
        }
      }
      
      if(tags[tag] < params.min){
        params.max = tags[tag];{
          return params;
        }
      }

       
    }  
  };

  const  calculateTagClass = function(count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );

  };

  const generateTags = function() {
    /*[NEW] create a new variable allTags with an empty object */
    let allTags = {};

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector); 
  
    /* START LOOP: for every article: */
    for(let article of articles) {

      /* find tags wrapper */
      const tagWrapper = article.querySelector(optArticleTagsSelector);

      /* make html variable with empty string */
      let html = '';

      /* get tags from data-tags attribute */
      /* split tags into array */
      const dataTags = article.getAttribute('data-tags').split(' ');

      /* START LOOP: for each tag */
      for (let tag of dataTags) {

        /* generate HTML of the link */
        
        const linkHTMLData = {id: tagId, title: tagTitle};
        const linkHTML = templates.tagLink(linkHTMLData);



        /* add generated code to html variable */
        html = html + linkHTML; 

        /* [NEW] check if this link is NOT already in allTags */
        if (!allTags.hasOwnProperty(tag)) {

          /* [NEW] add tag to allTags object */
          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }

      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagWrapper.innerHTML = html;
    /* END LOOP: for every article: */
    }
    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector('.tags');

    /* [NEW] create variable for all links HTML code */
    const tagsParams = calculateTagsParams(allTags);
    console.log('tagsParams:', tagsParams);
    const allTagsData = {tags: []};

    /*[NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags) {

      /*[NEW] generate code of a link and add it to allTagsHTML */
      allTagsData.tags.push({
        tag: tag,
        count: allTags[tag],
        className: calculateTagClass(allTags[tag], tagsParams)
      });
      const tagLinkHTML = '<li>' + '<a>' + calculateTagClass(allTags[tag], tagsParams) + '</li>' + '</a>';
      console.log('tagLinkHTML:', tagLinkHTML);
    }
    /* [NEW] END LOOP: for each tag in allTags: */
    
    /* [NEM] add html from allTagsHTML to tagList */
    tagList.innerHTML = templates.tagCloudLink(allTagsData);
    console.log('allTagsData', allTagsData);
  };
  
  generateTags();


  const tagClickHandler = function (event) {
    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */
    const tagLinksActive = document.querySelectorAll('a.active[href^="#tag-"]');


    /* START LOOP: for each active tag link */
    for (let tag of tagLinksActive) {

      /* remove class active */
      tag.classList.remove('active');

    /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagHref = document.querySelectorAll('a[href="' + href + '"]');
  
    /* START LOOP: for each found tag link */
    for (let tag of tagHref) {
    
      /* add class active */
      tag.classList.add('active');

    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  };

  const addClickListenersToTags = function(){
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('.post-tags a');
    /* START LOOP: for each link */
    for (let tag of tagLinks) {
    
      /* add tagClickHandler as event listener for that link */
      tag.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */
    }
  };

  addClickListenersToTags();


  const generateAuthors = function() {
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for (let article of articles) {
      /* find author wrapper */
      const authorWrapper = article.querySelector(optArticleAuthorsSelector);

      /* make html variable with empty string */
      let html = '';

      /* get author from data-author attribute */
      const dataAuthor = article.getAttribute('data-author');

      const dataAuthorHref = dataAuthor.replace(' ', '-').toLowerCase();

      /* generate HTML of the link */
      
      const linkHTMLData = {id: authorId, title: authorTitle};
      const linkHTML = templates.authorLink(linkHTMLData);

      /* add generated code to html variable */
      html = html + linkHTML;

      /* insert HTML of all the links into the tags wrapper */

      authorWrapper.innerHTML = html;
      /* END LOOP: for every article: */
    }
  };

  generateAuthors();

  const authorClickHandler = function (event) {
    /* prevent default action for this event */
    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);
    /* make a new constant "tag" and extract tag from the "href" constant */
    const author = href.replace('#author-', '');
    console.log(author);
    /* find all tag links with class active */
    const authorLinksActive = document.querySelectorAll('a.active[href^="#author-"]');
    /* START LOOP: for each active tag link */
    for (let author of authorLinksActive) {
      /* remove class active */
      author.classList.remove('active');
      /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const authorHref = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */
    for (let author of authorHref) {
      /* add class active */
      author.classList.add('active');
      /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-author="' + titleCase(author.replace('-', ' ')) + '"]');
    console.log(author.replace('-', ' ').toUpperCase());
  };

  const addClickListenersToAuthors = function() {
    /* find all links to authors */
    const authorLinks = document.querySelectorAll('.post-author a');
    /* START LOOP: for each author */
    for (let author of authorLinks) {
      /* add authorClickHandler as event listener for that link */
      author.addEventListener('click', authorClickHandler);
      /* END LOOP: for each link */
    }
  };

  const titleCase = function(string) {
    let sentence = string.toLowerCase().split(' ');
    for (let i = 0; i < sentence.length; i++) {
      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(' ');
  };

  addClickListenersToAuthors();
}

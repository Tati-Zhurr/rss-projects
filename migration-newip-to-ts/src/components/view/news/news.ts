import { IArticle} from '../../../types/index';
import './news.css';


class News {
    readonly newsNumberOnPage: number;
    constructor(){
        this.newsNumberOnPage = 10;
    }

    draw(data: IArticle[]) {
        const news = data.length >=  this.newsNumberOnPage ? data.filter((_item, idx) => idx <  this.newsNumberOnPage) : data;

        const fragment = document.createDocumentFragment();

        const newsItemTemp = document.querySelector('#newsItemTemp');
        if (newsItemTemp instanceof  HTMLTemplateElement){

            news.forEach((item, idx) => {
            
                const newsClone = <HTMLTemplateElement>newsItemTemp.content.cloneNode(true);

                const newsItem = newsClone.querySelector('.news__item');
                if (newsItem){
                    if (idx % 2) newsItem.classList.add('alt');

                const newsMetaPhoto: HTMLElement|null =  newsClone.querySelector('.news__meta-photo');
                if (newsMetaPhoto)  {
                    newsMetaPhoto.style.backgroundImage = `url(${
                        item.urlToImage || 'news_placeholder.jpg'
                    })`;

                }
    
                const newsMetaAuthor: HTMLElement|null =  newsClone.querySelector('.news__meta-author');
                if (newsMetaAuthor){
                    newsMetaAuthor.textContent = item.author || item.source.name;
                }

                const newsMetaDate: HTMLElement|null =  newsClone.querySelector('.news__meta-date');
                if (newsMetaDate){
                    newsMetaDate.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
                }

                const newsDescriptionTitle = newsClone.querySelector('.news__description-title');
                if (newsDescriptionTitle){
                    newsDescriptionTitle.textContent = item.title;
                }

                const newsDescriptionSource =  newsClone.querySelector('.news__description-source');
                if (newsDescriptionSource){
                    newsDescriptionSource.textContent = item.source.name;
                }

                const newsDescriptionContent =  newsClone.querySelector('.news__description-content')
                if (newsDescriptionContent){
                    newsDescriptionContent.textContent = item.description;
                }

                const newsReadMore = newsClone.querySelector('.news__read-more a');
                if (newsReadMore){
                    newsReadMore.setAttribute('href', item.url);
                }
                
                fragment.append(newsClone);
                }
            });
            
            const newsBlock = document.querySelector('.news');
            if (newsBlock){
                newsBlock.innerHTML = '';
                newsBlock.appendChild(fragment);
            }
           
        }
    

    }
    
                

}

export default News;

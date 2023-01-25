// eslint-disable-next-line import/extensions, import/no-unresolved
import { Article } from '../../../types';
import './news.css';

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const $newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = $newsItemTemp.content.cloneNode(true) as HTMLDivElement;

            const $newsItem = newsClone.querySelector('.news__item');
            if ($newsItem && idx % 2) $newsItem.classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;

            const $newsMetaAuthor = newsClone.querySelector('.news__meta-author');
            const $newsMetaDate = newsClone.querySelector('.news__meta-date');
            if ($newsMetaAuthor) {
                $newsMetaAuthor.textContent = item.author || item.source.name;
            }
            if ($newsMetaDate) {
                $newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const $newsDescriptionTitle = newsClone.querySelector('.news__description-title');
            const $newsDescriptionSource = newsClone.querySelector('.news__description-source');
            const $newsDescription = newsClone.querySelector('.news__description-content');
            const $newsReadMore = newsClone.querySelector('.news__read-more a');

            if ($newsDescriptionTitle) {
                $newsDescriptionTitle.textContent = item.title;
            }
            if ($newsDescriptionSource) {
                $newsDescriptionSource.textContent = item.source.name;
            }
            if ($newsDescription) {
                $newsDescription.textContent = item.description;
            }
            if ($newsReadMore) {
                $newsReadMore.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const $news = document.querySelector('.news');
        if ($news) {
            $news.innerHTML = '';
            $news.appendChild(fragment);
        }
    }
}

export default News;

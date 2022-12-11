import { ISource } from '../../../types/index';
import './sources.css';

class Sources {
    draw(data: ISource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp instanceof HTMLTemplateElement){
            data.forEach((item) => {
                const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

                const sourceItemName = sourceClone.querySelector('.source__item-name');
                if (sourceItemName){
                    sourceItemName.textContent = item.name;
                }

                const sourceItem = sourceClone.querySelector('.source__item');
                if (sourceItem){
                    sourceItem.setAttribute('data-source-id', item.id);
                }

                fragment.append(sourceClone);
            });

            const blockSources = document.querySelector('.sources');
            if (blockSources){
                blockSources.append(fragment);
            }

        }

   }
  
}

export default Sources;

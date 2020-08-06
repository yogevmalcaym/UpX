import translations from "../../translations";
import {urls} from "@front/router";

export const wrapMenuItems = ({items}) => {
    return [
        {
            id: '/',
            text: translations.HOME_MENU_TITLE,
        },
        ...items,
        {
            id: urls.ABOUT_US_VIEW_ROUTE,
            text: translations.ABOUT_USE_MENU_TITLE
        }
    ].map(item => {
        const {isCategory, id, children} = item;

        const url = isCategory ? `${urls.CATEGORY_VIEW_ROUTE}/${id}` : id;

        return {
            ...item,
            url,
            ...children && {
                children: children.map(item => ({
                    ...item,
                    url: `${url}/${item.id}`
                }))
            }
        }
    });
};
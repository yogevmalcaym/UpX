import {path as basePath} from '../manifest';
const path = [...basePath, 'aboutUs'];
const MODULE_NAMESPACE = path.join('.');
const STORE_PATH = MODULE_NAMESPACE;

export {
    path,
    MODULE_NAMESPACE,
    STORE_PATH
};

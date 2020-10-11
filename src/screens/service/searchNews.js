import {article_url,api_key} from '../config/rest_config_search';

export async function getArticles(searchText='apple') {
  try{
    let articles=await fetch(
      `${article_url}?q=${searchText}&apiKey=${api_key}`
    )
    let result = await articles.json();
    articles=null;
    return result.articles;
  }
  catch(error){
    throw error;
  }
}
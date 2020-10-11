import {article_url,api_key,country_code} from '../config/rest_config';

export async function getArticles(category='general') {
  try{
    let articles=await fetch(
      `${article_url}?country=${country_code}&category=${category}&apiKey=${api_key}`
    )
    let result = await articles.json();
    articles=null;
    return result.articles;
  }
  catch(error){
    throw error;
  }
}
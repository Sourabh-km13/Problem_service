import { marked } from "marked";
import  sanitizeHtml  from 'sanitize-html';
import TurndownService from "turndown";


function MarkdownSanitizer(markDown){
    const convertedHtml = marked(markDown)
    console.log('converted Html',convertedHtml)
    const sanitizedHtml = sanitizeHtml(convertedHtml,{
        allowedTags:sanitizeHtml.defaults.allowedTags
    })
    console.log('sanitized Html', sanitizedHtml);
    
    const turndownService = new TurndownService()
    
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml)
    console.log('santized markdown',sanitizedMarkdown);
    
    console.log(sanitizedMarkdown)
    return sanitizedMarkdown
}


export default MarkdownSanitizer
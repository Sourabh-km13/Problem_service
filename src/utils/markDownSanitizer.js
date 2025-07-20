import { marked } from "marked";
import  sanitizeHtml  from 'sanitize-html';
import TurndownService from "turndown";


function MarkdownSanitizer(markDown){
    const convertedHtml = marked(markDown)

    const sanitizedHtml = sanitizeHtml(convertedHtml,{
        allowedTags:sanitizeHtml.defaults.allowedTags.concat('img')
    })

    
    const turndownService = new TurndownService()
    
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml)

    return sanitizedMarkdown
}


export default MarkdownSanitizer
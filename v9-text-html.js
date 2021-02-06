/***
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file v9-text-html.js
 *      @see Seattle University Video Popup Content Item
 *      
 *      This content layout is to repair a bug and replace the html version of this layout
 *
 *      Document will write once when the page loads
 *
 *      @version 1.0
 */


 

var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' display_field='value' />");
var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Youtube Video ID' output='normal' display_field='value' />");
var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Vimeo Video ID' output='normal' display_field='value' />");
var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Video Description' output='normal' display_field='value' />");
var articleTitle = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Zone Option' output='normal' display_field='value' />");



/***
 *  send correct layout to the document
 * 
 */
try {

    /* if content exists, it'll start at 0 or later, so process this */
    if ((n >= 0)) {
        var sw = new java.io.StringWriter();
        var t4w = new com.terminalfour.utils.T4StreamWriter(sw);
        new com.terminalfour.publish.ContentPublisher().write(t4w, dbStatement, publishCache, section, content, contentTypeLayout, isPreview);
        output = sw.toString();

        // write to page document
        document.write(output);
    }


} catch (err) {
    document.write(err.message);
}
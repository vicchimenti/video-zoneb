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




/***
 *  build and write the document
 * 
 */
try {

    /***
     *  Assign local variables from the content type's fields
     * 
     * */
    var videoName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Name' output='normal' display_field='value' />");
    var youTubeID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Youtube Video ID' output='normal' display_field='value' />");
    var vimeoID = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Vimeo Video ID' output='normal' display_field='value' />");
    var videoDescription = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Video Description' output='normal' display_field='value' />");
    var zone = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Zone Option' output='normal' display_field='value' />");






     /***
     *  Write the document once
     * 
     * */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));


} catch (err) {
    document.write(err.message);
}
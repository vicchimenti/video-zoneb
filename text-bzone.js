/***
 *      @author Victor Chimenti, MSCS-SE '20
 *      @file text-bzone.js
 *      @see Seattle University Video Popup Content Item
 *      
 *      This content layout is to repair a bug and replace the html version of this layout
 *
 *      Document will write once when the page loads
 *
 *      @version 1.1
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
     *  Declare/Assign local variables with base formatting
     * 
     * */
    var videoPlayerString =     "<iframe title='videoName' src='<t4 type=&quot;content&quot; name=&quot;Video Type&quot; output=&quot;normal&quot; display_field=&quot;value&quot; /> \
                                <t4 type=&quot;content&quot; name=&quot;vimeoID&quot; output=&quot;normal&quot; modifiers=&quot;striptags&quot; />?color=aa0000&title=0&byline=0&portrait=0&rel=0&showinfo=0' \
                                width='585' height='329' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
    var descriptionString = '<div class="description">"' + videoDescription + '"</div>'
    var beginningHTML = '<div class="embeddedVideoWrapper contentItem" title="' + videoName + '" id="id<t4 type=\'meta\' meta=\'content_id\' data-position-default="ZoneB" data-position-selected="ZoneB"/>">';
    var endingHTML = '</div>';




     /***
     *  Write the document once
     * 
     * */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write(videoPlayerString);
    document.write(descriptionString);
    document.write(endingHTML);



} catch (err) {
    document.write(err.message);
}
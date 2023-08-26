
export default function AddToCalendar() {
    const data = `<p style="margin:0px 0px 10px 0px;text-align:center;font-size:17px;line-height:150%;color:#000;font-weight:bold;">Add event to calendar</p>
    <p style="margin:0px 0px 10px 0px;text-align:center;font-size:0px;">'
    <a href="https://www.addevent.com/event/Na18390368+apple" title="Apple" target="_blank" style="display:inline;">
        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-apple-t1.png" alt="Apple" width="45" border="0" style="width:45px;display:inline;" />
    </a>
    <a href="https://www.addevent.com/event/Na18390368+google" title="Google" target="_blank" style="display:inline;">
        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-google-t1.png" alt="Google" width="45" border="0" style="width:45px;display:inline;" />
    </a>
    <a href="https://www.addevent.com/event/Na18390368+office365" title="Office 365" target="_blank" style="display:inline;">
        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-office365-t1.png" alt="Office 365" width="45" border="0" style="width:45px;display:inline;" />
    </a>
    <a href="https://www.addevent.com/event/Na18390368+outlook" title="Outlook" target="_blank" style="display:inline;">
        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlook-t1.png" alt="Outlook" width="45" border="0" style="width:45px;display:inline;" />
    </a>
    <a href="https://www.addevent.com/event/Na18390368+outlookcom" title="Outlook.com" target="_blank" style="display:inline;">
        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlookcom-t1.png" alt="Outlook.com" width="45" border="0" style="width:45px;display:inline;" />
    </a>
    <a href="https://www.addevent.com/event/Na18390368+yahoo" title="Yahoo" target="_blank" style="display:inline;">
        <img src="https://cdn.addevent.com/libs/imgs/icon-emd-share-yahoo-t1.png" alt="Yahoo" width="45" border="0" style="width:45px;display:inline;" />
    </a>
    </p>
    <p style="margin:0;padding:25px 0px 0px 0px;text-align:center;">
        <a href="https://www.addevent.com/?utm_source=event&utm_medium=atclinks&utm_id=plg" target="_blank" style="font-weight:normal;color:#125ef8;text-decoration:underline;">
            <img src="https://cdn.addevent.com/web/images/logo-email-plain-fff-t1.png" alt="" width="129" height="15" style="width:129px;height:15px;display:inline;" />
        </a>
    </p>`
    return(
        <div dangerouslySetInnerHTML={{__html: data}}/>
        )
}
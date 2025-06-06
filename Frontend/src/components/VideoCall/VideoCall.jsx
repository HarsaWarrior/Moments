import React, { useEffect } from 'react';
import ZegoUIKitPrebuilt from '@zegocloud/zego-uikit-prebuilt';


const VideoCall = () => {
  useEffect(() => {
    function getUrlParams(url) {
      let urlStr = url.split('?')[1];
      const urlSearchParams = new URLSearchParams(urlStr);
      const result = Object.fromEntries(urlSearchParams.entries());
      return result;
    }

    const roomID = getUrlParams(window.location.href)['roomID'] || (Math.floor(Math.random() * 10000) + '');
    const userID = Math.floor(Math.random() * 10000) + '';
    const userName = 'userName' + userID;
    const appID = 714775000;
    const serverSecret = '3530977dbd1c04cfdea89a63e93d4dd9';
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
        container: document.querySelector("#root"),
        sharedLinks: [{
            name: 'Personal link',
            url: window.location.protocol + '//' + window.location.host  + window.location.pathname + '?roomID=' + roomID,
        }],
        scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
        },
                
        turnOnMicrophoneWhenJoining: true,
        turnOnCameraWhenJoining: true,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: true,
        showTextChat: true,
        showUserList: true,
        maxUsers: 2,
        layout: "Auto",
        showLayoutButton: false,
        });
  }, []);

  return (
    <div>
      <style>
        {`
          #root {
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
      <div id="root"></div>
    </div>
  );
};

export default VideoCall;

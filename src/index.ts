import {AgoraEduEvent, AgoraEduSDK} from 'agora-classroom-sdk'

async function main() {
    const dom = document.querySelector('#app') as HTMLElement
    AgoraEduSDK.config({
        appId: 'app id',
    })
    await AgoraEduSDK.launch(dom, {
        userUuid: 'user uuid',
        rtmToken: 'rtm token',
        userName: '123123',
        roomUuid: '123123',
        roleType: 1,
        roomType: 0,
        roomName: 'roomName',
        listener: function (evt: AgoraEduEvent): void {
            console.log('evt', evt)
        },
        pretest: false,
        language: 'en',
        startTime: 0,
        duration: 0,
        courseWareList: []
    })
}

main()
(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"id":"rootPlayer","scripts":{"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"openLink":TDV.Tour.Script.openLink,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"clone":TDV.Tour.Script.clone,"setValue":TDV.Tour.Script.setValue,"existsKey":TDV.Tour.Script.existsKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getKey":TDV.Tour.Script.getKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"executeJS":TDV.Tour.Script.executeJS,"getPixels":TDV.Tour.Script.getPixels,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"mixObject":TDV.Tour.Script.mixObject,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"isPanorama":TDV.Tour.Script.isPanorama,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"enableVR":TDV.Tour.Script.enableVR,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getOverlays":TDV.Tour.Script.getOverlays,"downloadFile":TDV.Tour.Script.downloadFile,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizShowScore":TDV.Tour.Script.quizShowScore,"disableVR":TDV.Tour.Script.disableVR,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"init":TDV.Tour.Script.init,"showWindowBase":TDV.Tour.Script.showWindowBase,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizStart":TDV.Tour.Script.quizStart,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"toggleVR":TDV.Tour.Script.toggleVR,"cloneBindings":TDV.Tour.Script.cloneBindings,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playAudioList":TDV.Tour.Script.playAudioList,"initQuiz":TDV.Tour.Script.initQuiz,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"createTween":TDV.Tour.Script.createTween,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"showWindow":TDV.Tour.Script.showWindow,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"registerKey":TDV.Tour.Script.registerKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"startMeasurement":TDV.Tour.Script.startMeasurement,"unloadViewer":TDV.Tour.Script.unloadViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"quizFinish":TDV.Tour.Script.quizFinish,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"translate":TDV.Tour.Script.translate,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setLocale":TDV.Tour.Script.setLocale,"unregisterKey":TDV.Tour.Script.unregisterKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo},"backgroundColor":["#448457"],"data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{},"displayTooltipInTouchScreens":true,"name":"Player817","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1}},"scrollBarColor":"#000000","left":445.65,"start":"this.init()","hash": "0a48c98715483cdcd156663f354b2a2d472903b833dfb7c552b7956866e8677b", "definitions": [{"id":"mainPlayList","class":"PlayList","items":[{"class":"PhotoAlbumPlayListItem","media":"this.album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07","end":"this.trigger('tourEnded')","player":"this.MainViewerPhotoAlbumPlayer"}]},{"data":{"label":"ITEM WEBSITE code warna-01"},"thumbnailUrl":"media/album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07_0_t.webp","height":2250,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07_0.webp"}]},"class":"Photo","label":trans('album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07_0.label'),"id":"album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07_0","width":4000,"duration":5000},{"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBackgroundColor":["#000000"],"progressBottom":10,"width":"100%","firstTransitionDuration":0,"subtitlesBottom":50,"progressBorderSize":0,"progressHeight":2,"subtitlesBorderColor":"#FFFFFF","progressBarBorderSize":0,"toolTipPaddingLeft":6,"playbackBarBottom":5,"progressBarBorderRadius":2,"playbackBarBackgroundColor":["#FFFFFF"],"data":{"name":"Main Viewer"},"playbackBarHeight":10,"vrPointerSelectionColor":"#FF6600","playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowHorizontalLength":1,"progressBorderRadius":2,"progressLeft":"33%","subtitlesFontFamily":"Arial","class":"ViewerArea","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBorderRadius":0,"vrPointerSelectionTime":2000,"toolTipFontColor":"#606060","surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"toolTipBorderColor":"#767676","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowHorizontalLength":0,"vrThumbstickRotationStep":20,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"toolTipPaddingBottom":4,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"playbackBarHeadBorderColor":"#000000","id":"MainViewer","playbackBarBorderSize":0,"progressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressRight":"33%","progressOpacity":0.7,"toolTipShadowColor":"#333138","progressBarBackgroundColorDirection":"horizontal","subtitlesFontColor":"#FFFFFF","progressBarBorderColor":"#000000","minHeight":50,"vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"minWidth":100,"subtitlesTop":0,"playbackBarBackgroundOpacity":1,"toolTipFontFamily":"Arial","toolTipTextShadowColor":"#000000","playbackBarHeadHeight":15,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","playbackBarLeft":0,"propagateClick":false,"height":"100%","progressBorderColor":"#000000","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingRight":6,"toolTipPaddingTop":4,"toolTipFontSize":"1.11vmin"},{"id":"MainViewerPhotoAlbumPlayer","class":"PhotoAlbumPlayer","viewerArea":"this.MainViewer"},{"backgroundOpacity":0.3,"backgroundColorRatios":[0,1],"id":"Container_8E162621_83EC_CD3C_41D8_D96274AD803E","backgroundColor":["#FFFFFF","#FFFFFF"],"layout":"absolute","data":{"name":"Container"},"scrollBarColor":"#000000","right":"0%","minWidth":20,"class":"Container","top":"0%","gap":10,"minHeight":20,"propagateClick":false,"scrollBarMargin":2,"children":["this.Image_8E47771D_83EC_4B01_419C_95552ECD7BDA"],"width":"100%","overflow":"scroll","height":"100%"},{"data":{"label":"Photo Album ITEM WEBSITE code warna-01"},"class":"PhotoAlbum","playList":"this.album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07_AlbumPlayList","label":trans('album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07.label'),"id":"album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07","thumbnailUrl":"media/album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07_t.png"},{"backgroundOpacity":0,"id":"Image_8E47771D_83EC_4B01_419C_95552ECD7BDA","left":"0%","data":{"name":"Image"},"url":trans('Image_8E47771D_83EC_4B01_419C_95552ECD7BDA.url'),"class":"Image","top":"0%","minWidth":1,"minHeight":1,"scaleMode":"fit_outside","width":"100%","propagateClick":false,"height":"100%"},{"id":"album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07_AlbumPlayList","class":"PhotoPlayList","items":[{"class":"PhotoPlayListItem","camera":{"initialPosition":{"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","duration":5000,"targetPosition":{"y":0.59,"class":"PhotoCameraPosition","x":0.69,"zoomFactor":1.1},"scaleMode":"fit_outside"},"media":"this.album_8DDB8A97_83EC_453F_41B6_7CA0161B4E07_0"}]}],"layout":"absolute","minHeight":0,"minWidth":0,"class":"Player","width":"100%","propagateClick":false,"height":"100%","scrollBarMargin":2,"watermark":false,"children":["this.MainViewer","this.Container_8E162621_83EC_CD3C_41D8_D96274AD803E"],"gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.0.3, Mon Jun 1 2026
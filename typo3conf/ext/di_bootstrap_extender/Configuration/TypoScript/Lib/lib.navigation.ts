nav {
    main = HMENU
    main {
        entryLevel = 0

        1 = TMENU
        1 {
            stdWrap.dataWrap = <p class="sr-only">Main navigation</p><ul class="nav-justified nav-flex">|</ul>

            expAll = 1

            NO {
                wrapItemAndSub = <li class="first">|</li> |*| <li>|</li>|*|<li class="last">|</li>
                    ATagTitle {
                    field = title
                    fieldRequired = nav_title
                }

                ATagParams = class="mainNavItem" id="{elementUid}"
                subst_elementUid = 1
            }

            ACT < .NO
            ACT {
                ATagParams = class="mainNavItem active" id="{elementUid}"
                subst_elementUid = 1
            }
            ACT = 1

            CUR < .ACT
            CUR = 1
        }

        2 = TMENU
        2 {
            stdWrap.dataWrap = <div class="mainNavLayerContainer"><div class="closeLayer"><a href="#" class="closeLayerLink"></a></div><div class="row"><div class="col-md-12"><div class="row"><ul class="col-md-4 subNavList">|</ul></div></div></div></div>

            expAll = 1

            NO {
                wrapItemAndSub = <li class="first">|</li> |*| <li>|</li>|*|<li class="last">|</li>
                    ATagTitle {
                    field = title
                    fieldRequired = nav_title
                }

                before.cObject = LOAD_REGISTER
                before.cObject {
                    menuPid.stdWrap.cObject = TEXT
                    menuPid.stdWrap.cObject.field = uid

                    menuTitle.stdWrap.cObject = TEXT
                    menuTitle.stdWrap.cObject.data = field:nav_title // field:title
                }

                ATagParams = class="layerSubNavItem"

                after.cObject = CONTENT
                after.cObject {
                    table = tt_content
                    select.pidInList.data = register:menuPid
                    select.where = colPos = 19
                    select.languageField = sys_language_uid

                    wrap = <div class="nav2LevelCnt navLayerTeaser">|</div>
                    stdWrap.wrap = |
                }

                after.cObject.stdWrap.append =  CONTENT
                after.cObject.stdWrap.append {
                    table = tt_content
                    select.pidInList.data = register:menuPid
                    select.where = colPos = 20
                    select.languageField = sys_language_uid

                    wrap = <div class="col-md-12 navLayer3Level navLayerTeaser">|</div>
                    stdWrap.wrap = |
                }
            }

            IFSUB < .NO
            IFSUB {
                after.cObject.stdWrap.append >
            }
            IFSUB = 1

            ACT < .NO
            ACT {
                ATagParams = class="layerSubNavItem activeSub"
            }
            ACT = 1

            ACTIFSUB < .NO
            ACTIFSUB {
                ATagParams = class="layerSubNavItem activeSub activeSubOpenedSub"
            }
            ACTIFSUB = 1

            CUR < .ACT
            CUR = 1
        }

        3 = TMENU
        3 {
            stdWrap.dataWrap = <div class="col-md-12 navLayer3Level"><div class="nav2LevelTitle">{register:menuTitle}</div><ul>|</ul></div>

                NO {
                allWrap = <li class="first">|</li> |*| <li>|</li>|*|<li class="last">|</li>
                    ATagTitle {
                    field = title
                    fieldRequired = nav_title
                }
            }

            ACT < .NO
            ACT {
                ATagParams = class="active"
            }
            ACT = 1

            CUR < .ACT
            CUR = 1
        }

        stdWrap.prepend = HMENU
        stdWrap.prepend {
            entryLevel = 0
            wrap = <form class="divisionSelectNav" action="#" method="get">|</form>

            1 = TMENU
            1 {
                wrap = <select id="selectDivision">|</select>

                NO = 1
                NO {
                    doNotLinkIt = 1
                    stdWrap.cObject = COA
                    stdWrap.cObject {
                        10 = TEXT
                        10 {
                            wrap = <option value="|">
                            insertData = 1
                            typolink {
                                parameter.field = uid
                                returnLast = url
                            }
                        }

                        20 = TEXT
                        20 {
                            field = nav_title // title
                            wrap = |</option>
                        }
                    }
                }

                ACT < .NO
                ACT {
                    stdWrap.cObject.10 {
                        wrap = <option selected="selected" value="|">
                    }
                }
            }
        }
    }

    sub = HMENU
    sub {
        entryLevel = 2

        1 = TMENU
        1 {
            stdWrap.dataWrap = <p class="sr-only">Sub navigation</p><ul>|</ul>
            expAll = 1

            NO {
                stdWrap.htmlSpecialChars = 1
                wrapItemAndSub = <li>|</li>
                    ATagTitle {
                    field = title
                    fieldRequired = nav_title
                }
            }

            ACT < .NO
            ACT = 1

            IFSUB < .NO
            IFSUB = 1
            IFSUB {
                stdWrap2.dataWrap = |<a class="toogleIcon collapsed" data-toggle="collapse" data-target="#subNav{field:uid}" href="javascript:void(0)"><span></span></a>
                    stdWrap {
                    append = LOAD_REGISTER
                    append {
                        className = collapse
                    }
                }
            }

            ACTIFSUB < .IFSUB
            ACTIFSUB.ATagParams = class="curOpened"
            ACTIFSUB = 1
            ACTIFSUB {
                stdWrap2.dataWrap = |<a class="toogleIcon" data-toggle="collapse" data-target="#subNav{field:uid}" href="javascript:void(0)"><span></span></a>
                wrapItemAndSub = <li class="open">|</li>
                    stdWrap {
                    append = LOAD_REGISTER
                    append {
                        className = collapse in
                    }
                }
            }

            CURIFSUB < .ACTIFSUB
            CURIFSUB {
                stdWrap2.dataWrap = |<a class="toogleIcon collapsed" data-toggle="collapse" data-target="#subNav{field:uid}" href="javascript:void(0)"><span></span></a>
                stdWrap.append = LOAD_REGISTER
                stdWrap.append {
                    className = collapse
                }
                ATagParams = class="active"
            }
            CURIFSUB = 1

            CUR < .ACT
            CUR.ATagParams = class="active"
            CUR = 1
        }

        2 < .1
        2 {
            ACTIFSUB {
                ATagParams = class="active"
                stdWrap2.dataWrap = |
            }
            stdWrap.dataWrap = <ul id="subNav{field:pid}" class="{REGISTER:className}">|</ul>
                ACT < .NO
            ACT {
                ATagParams = class="active"
            }
            ACT = 1
            CURIFSUB = 0
            CURIFSUB >
            IFSUB = 0
            IFSUB >
            ACTIFSUB = 0
            ACTIFSUB >
        }

        stdWrap {
            dataWrap (
                <nav id="subNav" class="navbar navbar-default" role="navigation">
            <div class="navbar-header">
            <a href="javascript:void(0)" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#subNavItems"></a>
            </div>
            <div id="subNavItems" class="collapse navbar-collapse">|</div></nav><hr />
        )
            if < lib.hasSubNav
                }
    }

    division = HMENU
    division {
        special = directory
        special.value = {$di.nav.DivisionNav}

        1 = TMENU
        1 {
            noBlur = 1
            stdWrap.dataWrap = <p class="sr-only">Division navigation</p><ul>|</ul>

            NO {
                wrapItemAndSub = <li>|</li>
                stdWrap.htmlSpecialChars = 1
                ATagTitle {
                    field = title
                    fieldRequired = nav_title
                }
            }

            ACT < .NO
            ACT.ATagParams = class="active"
            ACT = 1
        }
    }

    meta = HMENU
    meta {
        entryLevel = 0
        excludeUidList = {$di.nav.DivisionNav}

        1 = TMENU
        1 {
            noBlur = 1
            stdWrap.dataWrap = <p class="sr-only">Meta navigation</p><ul>|</ul>

            NO {
                wrapItemAndSub = <li>|</li>
                stdWrap.htmlSpecialChars = 1
                ATagTitle {
                    field = title
                    fieldRequired = nav_title
                }
            }

            ACT < .NO
            ACT.ATagParams = class="active"
            ACT = 1
        }
    }

    service = HMENU
    service {
        special = directory
        special.value = {$di.nav.ServiceNav}

        1 = TMENU
        1 {
            noBlur = 1
            stdWrap.dataWrap = <p class="sr-only">Service navigation</p><ol>|</ol>

            NO {
                wrapItemAndSub = <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
                stdWrap.htmlSpecialChars = 1
                ATagTitle {
                    field = title
                    fieldRequired = nav_title
                }
            }

            ACT < .NO
            ACT.ATagParams = class="active"
            ACT.doNotLinkIt = true
            ACT = 1
        }
    }

    breadcrumbs = HMENU
    breadcrumbs {
        special = rootline
        #includeNotInMenu = 1
        #excludeUidList = 1,{$di.nav.ServiceNav}

        1 = TMENU
        1 {
            noBlur = 1

            NO {
                allWrap =  <li class="first">|</li> |*| <li>|</li> |*| <li class="last">|</li>
                stdWrap.htmlSpecialChars = 1
                ATagTitle.field = subtitle
            }

            CUR < .NO
            CUR {
                ATagParams = class="active"
                doNotLinkIt = 1
            }
            CUR = 1
        }

        stdWrap {
            dataWrap = <div id="breadcrumb"><p class="sr-only">Sie sind hier:</p><ol>|</ol></div><hr />
        }
    }
}
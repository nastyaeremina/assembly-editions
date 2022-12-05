import { StatefulTabs, StyledTab, Tab } from 'baseui/tabs'
import { LabelMedium } from 'baseui/typography'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FEATURES_MESSAG_TAB_ID, HOME_MODULE_LIST, MODULE_COLOR_LIST } from '../../constants/constant'
import { isEmpty } from '../../helpers/helpers'
import { getTabGroupById } from '../../lib/contentful-tabs'
import { Container, SecondryButton } from '../../styles/commonStyles'
import { ContainWrap, IconSvg, LeftDetail, RightDetail, TabRow } from '../../styles/homepageStyles'

function TabOverride(rest) {
    const { $active, id } = rest;
    const fontColor = MODULE_COLOR_LIST[HOME_MODULE_LIST[rest?.children]]?.fontColor
    const bgColor = MODULE_COLOR_LIST[HOME_MODULE_LIST[rest?.children]]?.bgColor

    const newRest = {
        ...rest,
        bgColor: bgColor,
        fontColor: fontColor,
    };
    return (
        <StyledTab {...newRest}>
            {< LabelMedium
                overrides={{
                    Block: {
                        style: {
                            color: 'inherit',
                            ':hover': { color: 'inherit' }
                            // color: $active ? MODULE_COLOR_LIST[HOME_MODULE_LIST[rest?.children]]?.fontColor : 'inherit',
                            // backgroundColor: $active ? MODULE_COLOR_LIST[HOME_MODULE_LIST[rest?.children]]?.bgColor : 'inherit', ':hover': { color: 'inherit' }
                        }
                    }
                }}>

                {rest?.children}

            </ LabelMedium>}
        </StyledTab >
    );
}

const tabBarStyle = ({ $theme }) => ({
    backgroundColor: '#fff',
    'margin-bottom': '20px',
    'padding-left': '0px'
});
const tabContentStyle = ({ $theme }) => ({
    borderLeftWidth: '2px',
    borderRightWidth: '2px',
    borderBottomWidth: '2px',
    borderTopWidth: '0',
    borderLeftColor: $theme.colors.mono600,
    borderRightColor: $theme.colors.mono600,
    borderTopColor: $theme.colors.mono600,
    borderBottomColor: $theme.colors.mono600
});
let activeKey = 0;
const tabStyle = ({ $active, $disabled, $theme, bgColor, fontColor }) => ({
    backgroundColor: $active ? MODULE_COLOR_LIST[activeKey]?.bgColor : 'inherit',
    color: $active ? MODULE_COLOR_LIST[activeKey]?.fontColor : '#757575',
    // outlineColor: $theme.colors.white,
    // color: $active ? fontColor && fontColor : '#757575',
    // backgroundColor: $active ? bgColor && bgColor : 'inherit',


    // eslint-disable-next-line no-dupe-keys
    'border-radius': '40px',
    padding: '7px 20px'

});
export default function TabView({ tabId, bgColor, textColor }) {
    const [allPosts, setAppPosts] = useState([])
    const loadData = useCallback(async () => {
        const posts = (await getTabGroupById(tabId)) ?? [];
        setAppPosts(posts)
    }, [tabId])

    useEffect(() => {
        loadData()
    }, [loadData])

    const tablistview = useMemo(() => {
        if (isEmpty(allPosts)) return null
        return allPosts?.map((item, index) => {
            return (
                <Tab title={item?.name} className={index === 0 ? 'ml0' : 'ml0'} key={index} id={item?.name}>
                    <ContainWrap>
                        <LeftDetail>
                            <h4>{item?.subTitle}</h4>
                            <p>
                                {item?.description}
                            </p>
                        </LeftDetail>
                        <RightDetail>
                            <Image
                                src={item?.image?.url}
                                width={881}
                                height={550}
                                alt="msg-screen"
                            />
                        </RightDetail>
                    </ContainWrap>
                </Tab>)

        })
    }, [allPosts])
    return (

        <>{
            !isEmpty(allPosts) &&
            (<TabRow>
                <StatefulTabs
                    initialState={{
                        activeKey: activeKey
                    }}
                    overrides={{
                        TabBar: {
                            style: tabBarStyle
                        },
                        TabContent: {
                            style: tabContentStyle
                        },
                        Tab: { component: TabOverride, style: tabStyle }
                    }}>
                    {tablistview}



                </StatefulTabs>
            </TabRow>)}
        </>

    )
}


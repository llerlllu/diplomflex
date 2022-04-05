import React from 'react';

import { MainLayout } from 'components/layout/';
import { Body, Slider, Select } from 'components/page/Main/';


export default function Home() {

    return (
        <MainLayout>
            <Body>
                <Slider/>
                <Select/>
            </Body>
        </MainLayout>
    );
}

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import * as Progress from 'react-native-progress';
export default function index() {

    const [indeterminate, setIndeterminate] = useState(false)
    const [progressBar, setProgress] = useState(0)
    useEffect(() => {
        let progress = 0.10;
        setTimeout(() => {
            setIndeterminate(false)
            setInterval(() => {
                progress += 0.10;
                if (progress > 1) {
                    progress = 1;
                }
                setProgress(progress)
            }, 500);
        }, 1500);
    }, [])
    return (
        <Progress.Bar
            progress={progressBar}
            indeterminate={indeterminate}
        />
    )
}

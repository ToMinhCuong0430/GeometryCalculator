import React, { useEffect } from 'react';
import { getHistory } from '../services/geometryApi';

function HistoryLoader({setHistory}) {
    useEffect(() => {
        async function loadHistory() {
            try {
                const historyData = await getHistory();
                setHistory(historyData);
            } catch (error) {
                console.error("Failed to load history:", error);
            }
        }

        loadHistory();
    }, [setHistory]);

    return null; // This component does not render anything
}

export default HistoryLoader;
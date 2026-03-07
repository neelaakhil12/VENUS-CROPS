"use client";

import React, { memo } from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";

// A reliably hosted TopoJSON of India states
const geoUrl = "/india.json";

const operatingStates = [
    "Uttar Pradesh",
    "Punjab",
    "Haryana",
    "Rajasthan",
    "Gujarat",
    "Madhya Pradesh",
    "Maharashtra",
    "Telangana",
    "Andhra Pradesh",
    "West Bengal",
    "Karnataka"
];

const markers = [
    { name: "Uttar Pradesh", coordinates: [80.9462, 26.8467] },
    { name: "Punjab", coordinates: [75.3412, 31.1471] },
    { name: "Haryana", coordinates: [76.0856, 29.0588] },
    { name: "Rajasthan", coordinates: [74.2179, 27.0238] },
    { name: "Gujarat", coordinates: [71.1924, 22.2587] },
    { name: "Madhya Pradesh", coordinates: [77.4126, 22.9734] },
    { name: "Maharashtra", coordinates: [75.7139, 19.7515] },
    { name: "Telangana", coordinates: [79.0153, 18.1124] },
    { name: "Andhra Pradesh", coordinates: [79.7400, 15.9129] },
    { name: "West Bengal", coordinates: [87.8550, 22.9868] },
    { name: "Karnataka", coordinates: [75.7139, 15.3173] }
];

const IndiaMap = () => {
    return (
        <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-green-50/50 rounded-3xl p-4 border border-green-100">
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 1000,
                    center: [82.8, 22.5]
                }}
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }: { geographies: any[] }) =>
                        geographies.map((geo: any) => {
                            const name = geo.properties.NAME_1 || geo.properties.ST_NM || geo.properties.name;
                            const isOperating = operatingStates.includes(name);

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={isOperating ? "#16A34A" : "#E11D48"} // brand-green or brand-red
                                    stroke="#FFFFFF"
                                    strokeWidth={0.5}
                                    style={{
                                        default: { outline: "none" },
                                        hover: { fill: isOperating ? "#15803D" : "#BE123C", outline: "none", cursor: "pointer" },
                                        pressed: { outline: "none" },
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>

                {markers.map(({ name, coordinates }) => (
                    <Marker key={name} coordinates={coordinates as [number, number]}>
                        <g
                            fill="none"
                            stroke="#E11D48" // brand-red
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            transform="translate(-12, -24)"
                        >
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                        </g>
                        <text
                            textAnchor="middle"
                            y={15}
                            style={{ fontFamily: "inherit", fill: "#1f2937", fontSize: "12px", fontWeight: "bold" }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
};

export default memo(IndiaMap);

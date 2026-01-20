import React, { useState } from 'react';
import './CountrySelector.css';

const CountrySelector = ({ setCountry }) => {
    const [selectedCountry, setSelectedCountry] = useState('');

    const countries = [
        { code: 'us', name: 'United States', flag: '🇺🇸' },
        { code: 'gb', name: 'United Kingdom', flag: '🇬🇧' },
        { code: 'in', name: 'India', flag: '🇮🇳' },
        { code: 'bd', name: 'Bangladesh', flag: '🇧🇩' },
        { code: 'ca', name: 'Canada', flag: '🇨🇦' },
        { code: 'au', name: 'Australia', flag: '🇦🇺' },
        { code: 'de', name: 'Germany', flag: '🇩🇪' },
        { code: 'fr', name: 'France', flag: '🇫🇷' },
        { code: 'jp', name: 'Japan', flag: '🇯🇵' },
        { code: 'kr', name: 'South Korea', flag: '🇰🇷' },
        { code: 'br', name: 'Brazil', flag: '🇧🇷' },
        { code: 'mx', name: 'Mexico', flag: '🇲🇽' },
    ];

    const handleCountryClick = (code) => {
        setSelectedCountry(code);
        setCountry(code);
    };

    return (
        <div className="country-selector-container">
            <h2 className="country-selector-title">
                <span className="title-icon">🌍</span>
                Select Your Country
            </h2>
            <div className="country-grid">
                {countries.map((country) => (
                    <button
                        key={country.code}
                        className={`country-card ${selectedCountry === country.code ? 'selected' : ''}`}
                        onClick={() => handleCountryClick(country.code)}
                    >
                        <span className="country-flag">{country.flag}</span>
                        <span className="country-name">{country.name}</span>
                        {selectedCountry === country.code && (
                            <span className="selected-indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CountrySelector;
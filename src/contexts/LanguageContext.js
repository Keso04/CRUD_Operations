import { createContext, useContext, useMemo, useState } from "react"

export const LanguageDictionary = {
    georgian: 'Current language is georgian',
    english: 'Current language is english'
}

const LanguageContext = createContext(null);

const LanguageContextProvider = ({children}) => {
    const [georgian, setGeorgian] = useState(true);

    const contextValue = useMemo(() => {
        return {
            language: georgian ? 'georgian' : 'english',
            toggleLanguage: () => setGeorgian((prev) => !prev)
        }
    })

    return <LanguageContext.Provider value={contextValue}>
        {children}
    </LanguageContext.Provider>
}

export const useLanguageContext = () => {
    const contextValue = useContext(LanguageContext);

    if(!contextValue) throw new Error('Your component is not  inside LanguageContextProvider');

    return contextValue;
}

export default LanguageContextProvider;
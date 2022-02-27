/**
 * Project: regions-server
 * File: regions.js
 * Created by Pennycodes on 2/27/2022.
 * Copyright regions-server
 */
const regions = [
    {
        code: 'AR',
        label: 'Ahafo Region',
        districts: [
            {
                code: 'ASN',
                label: 'Asunafo North',
                category: 'Municipal',
                capital: 'Goaso',
            },
            {
                code: 'ASS',
                label: 'Asunafo South',
                category: 'District',
                capital: 'Kukuom',
            },
            {
                code: 'ATN',
                label: 'Asutifi North',
                category: 'District',
                capital: 'Kenyasi',
            },
            {
                code: 'ATS',
                label: 'Asutifi South',
                category: 'District',
                capital: 'Hwidiem',
            },
            {
                code: 'TAN',
                label: 'Tano North',
                category: 'Municipal',
                capital: 'Duayaw Nkwanta',
            },
            {
                code: 'TAS',
                label: 'Tano South',
                category: 'Municipal',
                capital: 'Bechem',
            },
        ],
    },
    {
        code: 'AS',
        label: 'Ashanti Region',
        districts: [
            {
                code: 'ADA',
                label: 'Adansi Asokwa',
                category: 'District',
                capital: 'Adansi Asokwa',
            },
            {
                code: 'ADN',
                label: 'Adansi North',
                category: 'District',
                capital: 'Fomena',
            },
            {
                code: 'ADS',
                label: 'Adansi North',
                category: 'District',
                capital: 'New Edubiase',
            },
            {
                code: 'AKN',
                label: 'Afigya-Kwabre North',
                category: 'District',
                capital: 'Boamang',
            },
            {
                code: 'AKS',
                label: 'Afigya-Kwabre South',
                category: 'District',
                capital: 'Kodie',
            },
            {
                code: 'AAN',
                label: 'Ahafo-Ano North',
                category: 'Municipal',
                capital: 'Tepa',
            },
            {
                code: 'AASE',
                label: 'Ahafo-Ano South East',
                category: 'District',
                capital: 'Adugyama',
            },
            {
                code: 'AASW',
                label: 'Ahafo-Ano South West',
                category: 'District',
                capital: 'Mankranso',
            },
            {
                code: 'AKF',
                label: 'Akrofuom',
                category: 'District',
                capital: 'Akrofuom',
            },
            {
                code: 'AMC',
                label: 'Amansie Central',
                category: 'District',
                capital: 'Jacobu',
            },
            {
                code: 'AMW',
                label: 'Amansie West',
                category: 'District',
                capital: 'Manso Nkwanta',
            },
            {
                code: 'AMS',
                label: 'Amansie South',
                category: 'District',
                capital: 'Manso Adubia',
            },
            {
                code: 'AAKC',
                label: 'Asante-Akim Central',
                category: 'Municipal',
                capital: 'Konongo',
            },
            {
                code: 'AAKN',
                label: 'Asante-Akim North',
                category: 'District',
                capital: 'Agogo',
            },
            {
                code: 'AAKS',
                label: 'Asante-Akim South',
                category: 'Municipal',
                capital: 'Juaso',
            },
            {
                code: 'ASM',
                label: 'Asokore-Mampong',
                category: 'Municipal',
                capital: 'Asokore-Mampong',
            },
            {
                code: 'ASK',
                label: 'Asokwa',
                category: 'Municipal',
                capital: 'Asokwa',
            },
            {
                code: 'ATK',
                label: 'Atwima-Kwanwoma',
                category: 'District',
                capital: 'Twedie',
            },
            {
                code: 'ATM',
                label: 'Atwima-Mponua',
                category: 'District',
                capital: 'Nyinahin',
            },
            {
                code: 'ATN',
                label: 'Atwima-Nwabiagya',
                category: 'Municipal',
                capital: 'Nkawie',
            },
            {
                code: 'ATNN',
                label: 'Atwima-Nwabiagya North',
                category: 'District',
                capital: 'Barekese',
            },
            {
                code: 'BEK',
                label: 'Bekwai',
                category: 'Municipal',
                capital: 'Bekwai',
            },
            {
                code: 'BF',
                label: 'Bosome Freho',
                category: 'District',
                capital: 'Asiwa',
            },
            {
                code: 'BST',
                label: 'Bosomtwe',
                category: 'District',
                capital: 'Kuntanase',
            },
            {
                code: 'EJ',
                label: 'Ejisu',
                category: 'Municipal',
                capital: 'Ejisu',
            },
            {
                code: 'EJS',
                label: 'Ejura/Sekyedumase',
                category: 'Municipal',
                capital: 'Ejura',
            },
            {
                code: 'JB',
                label: 'Juaben',
                category: 'Municipal',
                capital: 'Juaben',
            },
            {
                code: 'KSI',
                label: 'Kumasi',
                category: 'Metropolitan',
                capital: 'Kumasi',
            },
            {
                code: 'KBE',
                label: 'Kwabre East',
                category: 'Municipal',
                capital: 'Mamponteng',
            },
            {
                code: 'KDS',
                label: 'Kwadaso',
                category: 'Municipal',
                capital: 'Kwadaso',
            },
            {
                code: 'MAP',
                label: 'Mampong',
                category: 'Municipal',
                capital: 'Mampong',
            },
            {
                code: 'OBE',
                label: 'Obuasi East',
                category: 'Municipal',
                capital: 'Tutuka',
            },
            {
                code: 'OB',
                label: 'Obuasi',
                category: 'Municipal',
                capital: 'Obuasi',
            },
            {
                code: 'OFF',
                label: 'Offinso',
                category: 'Municipal',
                capital: 'Offinso',
            },
            {
                code: 'OFFN',
                label: 'Offinso North',
                category: 'District',
                capital: 'Akomadan',
            },
            {
                code: 'OFK',
                label: 'Oforikrom',
                category: 'Municipal',
                capital: 'Oforikrom',
            },
            {
                code: 'OLT',
                label: 'Old Tafo',
                category: 'Municipal',
                capital: 'Old Tafo',
            },
            {
                code: 'SAP',
                label: 'Sekyere Afram Plains',
                category: 'District',
                capital: 'Drobonso',
            },
            {
                code: 'SEC',
                label: 'Sekyere Central',
                category: 'District',
                capital: 'Nsuta',
            },
            {
                code: 'SEE',
                label: 'Sekyere East',
                category: 'District',
                capital: 'Effiduase',
            },
            {
                code: 'SEK',
                label: 'Sekyere Kumawu',
                category: 'District',
                capital: 'Kumawu',
            },
            {
                code: 'SES',
                label: 'Sekyere South',
                category: 'District',
                capital: 'Agona',
            },
            {
                code: 'SUA',
                label: 'Suame',
                category: 'Municipal',
                capital: 'Suame',
            },
        ],
    },
    {
        code: 'BR',
        label: 'Bono Region',
        districts: [
            {
                code: 'BD',
                label: 'Banda',
                category: 'District',
                capital: 'Banda Ahenkro',
            },
            {
                code: 'BEE',
                label: 'Berekum East',
                category: 'Municipal',
                capital: 'Berekum',
            },
            {
                code: 'BEW',
                label: 'Berekum West',
                category: 'District',
                capital: 'Jinijini',
            },
            {
                code: 'DC',
                label: 'Dormaa Central',
                category: 'Municipal',
                capital: 'Dormaa Ahenkro',
            },
            {
                code: 'DE',
                label: 'Dormaa East',
                category: 'District',
                capital: 'Wamfie',
            },
            {
                code: 'DW',
                label: 'Dormaa West',
                category: 'District',
                capital: 'Nkrankwanta',
            },
            {
                code: 'JN',
                label: 'Jaman North',
                category: 'District',
                capital: 'Sampa',
            },
            {
                code: 'JS',
                label: 'Jaman South',
                category: 'Municipal',
                capital: 'Drobo',
            },
            {
                code: 'SY',
                label: 'Sunyani',
                category: 'Municipal',
                capital: 'Sunyani',
            },
            {
                code: 'SYW',
                label: 'Sunyani West',
                category: 'District',
                capital: 'Odumase',
            },
            {
                code: 'TN',
                label: 'Tain',
                category: 'District',
                capital: 'Nsawkaw',
            },
            {
                code: 'WC',
                label: 'Wenchi',
                category: 'Municipal',
                capital: 'Wenchi',
            },
        ],
    },
    {
        code: 'UW',
        label: 'Bono Region',
        districts: [
            {
                code: 'BD',
                label: 'Banda',
                category: 'District',
                capital: 'Banda Ahenkro',
            },
            {
                code: 'BEE',
                label: 'Berekum East',
                category: 'Municipal',
                capital: 'Berekum',
            },
            {
                code: 'BEW',
                label: 'Berekum West',
                category: 'District',
                capital: 'Jinijini',
            },
            {
                code: 'DC',
                label: 'Dormaa Central',
                category: 'Municipal',
                capital: 'Dormaa Ahenkro',
            },
            {
                code: 'DE',
                label: 'Dormaa East',
                category: 'District',
                capital: 'Wamfie',
            },
            {
                code: 'DW',
                label: 'Dormaa West',
                category: 'District',
                capital: 'Nkrankwanta',
            },
            {
                code: 'JN',
                label: 'Jaman North',
                category: 'District',
                capital: 'Sampa',
            },
            {
                code: 'JS',
                label: 'Jaman South',
                category: 'Municipal',
                capital: 'Drobo',
            },
            {
                code: 'SY',
                label: 'Sunyani',
                category: 'Municipal',
                capital: 'Sunyani',
            },
            {
                code: 'SYW',
                label: 'Sunyani West',
                category: 'District',
                capital: 'Odumase',
            },
            {
                code: 'TN',
                label: 'Tain',
                category: 'District',
                capital: 'Nsawkaw',
            },
            {
                code: 'WC',
                label: 'Wenchi',
                category: 'Municipal',
                capital: 'Wenchi',
            },
        ],
    },
];


module.exports = regions

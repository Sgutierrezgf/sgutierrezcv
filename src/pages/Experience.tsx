/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import '../styles/pages/Experience.css'

interface DataType {
    key: string;
    company: string;
    year: string;
    position: string;
    technologiesused: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Company',
        dataIndex: 'company',
        key: 'company',
        render: (text) => <a style={{ color: "black" }}>{text}</a>,
    },
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
    },
    {
        title: 'TechnologiesUsed',
        key: 'technologiesused',
        dataIndex: 'technologiesused',
        render: (_, { technologiesused }) => (
            <>
                {technologiesused.map((technologiesused) => {
                    let color = technologiesused.length > 5 ? 'geekblue' : 'green';
                    if (technologiesused === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={technologiesused}>
                            {technologiesused.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        company: 'JIKKOSOFT - Cali',
        position: 'SOFTWARE ENGINNER MID I',
        year: 'MARCH 2021 - AUGUST 2022',
        technologiesused: ['React js', 'Typescript', 'SASS', 'Node'],
    },
    {
        key: '2',
        company: 'SETI - Medellin',
        position: 'DATABASE TRAINING',
        year: 'MARCH 2021 - AUGUST 2022',
        technologiesused: ['Visual Studio', 'SQL Managment', 'Command console', 'Power Automate', 'HTML'],
    },
];

const Experience = () => (
    <section className="Exp" id='experience'>
        <div className="WorkExp">
            <h1>Experience</h1>

            {/* <table className='TableExp'>
                <tr className='TableExp-title'>
                    <th className='TableExp-title1'>Company</th>
                    <th className='TableExp-title2'>Year</th>
                    <th className='TableExp-title3'>Position</th>
                    <th className='TableExp-title4'>Description</th>
                    <th className='TableExp-title5'>Technologies used</th>
                </tr>
                <tr className='TableExp-description'>
                    <td className='TableExp-description1'>JIKKOSOFT, Cali</td>
                    <td className='TableExp-description2'>SOFTWARE ENGINNER MID I</td>
                    <td className='TableExp-description3'>MARCH 2021 - AUGUST 2022</td>
                    <td className='TableExp-description4'>Development and maintenance of a virtual tax collection application, focused on
                        the mayor's offices of the cities of colombia.</td>
                    <td className='TableExp-description5'>React js, Typescript , SASS, Node.</td>
                </tr>
                <tr className='TableExp-description'>
                    <td className='TableExp-description1'>SETI, Medellin</td>
                    <td className='TableExp-description2'>DATABASE TRAINING</td>
                    <td className='TableExp-description3'>SEPTEMBER 2019 - MARCH 2021</td>
                    <td className='TableExp-description4'>Development, management and maintenance of the databases of a financial
                        company, performing the process of migrating local databases to virtual
                        databases.</td>
                    <td className='TableExp-description5'>Visual Studio, SQL Managment, Command console, Power
                        Automate, HTML</td>
                </tr>
            </table> */}
            <Table columns={columns} dataSource={data} pagination={false} />;
        </div>
    </section>
)

export default Experience;
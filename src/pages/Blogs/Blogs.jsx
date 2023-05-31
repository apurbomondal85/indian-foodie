
import { Accordion, Button } from 'flowbite-react'
import React from 'react'
import MyDocument from '../../DocPdf/DocPdf'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

function Blogs() {
    return (
        <div className='py-16'>
            <h1 className='text-center text-3xl mb-8'>Common questions and answers</h1>
            <Accordion collapseAll={true} className='w-[70%] mx-auto'>
                <Accordion.Panel>
                    <Accordion.Title>
                        Tell us the differences between uncontrolled and controlled components?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <strong>Uncontrolled Components: </strong>
                            Uncontrolled components manage their own state internally.
                            The state is managed by the component itself, not by the parent component or any other external source.
                            The state can be initialized by providing default values for the input fields.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            <strong>Controlled Components: </strong>
                            Controlled components are a more controlled way of handling form inputs.
                            The state of the input is managed by the parent component or an external source.
                            The state is passed to the component as a prop, and any changes to the input value are
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How to validate React props using PropTypes?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            PropTypes is a library in React that is used to validate the props passed to a component. It is a type checking library that helps to ensure that the props passed to a component have the correct type and format. Here's an example of how to use PropTypes to validate props in a React component
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            <li>First, you need to install PropTypes using npm or yarn</li>
                            <li>Import PropTypes in your component file</li>
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Tell us the difference between nodejs and express js?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is a custom hook, and why will you create a custom hook?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
            {/* react to pdf */}
            <div className='mt-8 flex justify-center'>
                <PDFDownloadLink document={<MyDocument />} fileName="myText.pdf">
                    {({ loading }) =>
                        loading ? 'Loading document...' : <Button>Download now!</Button>
                    }
                </PDFDownloadLink>
            </div>
        </div>
    )
}

export default Blogs

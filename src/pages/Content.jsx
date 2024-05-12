import React, { useState } from 'react';
import Markdoc from '@markdoc/markdoc';

function Content() {
    const [markdownContent, setMarkdownContent] = useState('');
    var [htmlContent, setHtmlContent] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [fileName, setFileName] = useState('');
    const [slugUrl, setSlugUrl] = useState('');
    const [imageName, setImageName] = useState('');
    const [isBlog, setIsBlog] = useState(false);
    const [isResources, setIsResources] = useState(false);
    const [isNews, setIsNews] = useState(false);
    const [isStocks, setIsStocks] = useState(false);
    const [tag1, setTag1] = useState("");
    const [tag2, setTag2] = useState("");
    const [finalCode, setFinalCode] = useState("");
    
    const handleMarkdownChange = (e) => {
        setMarkdownContent(e.target.value);
    };

    const handleConvertClick = () => {
        const formattedDate = new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
        setDate(formattedDate);
        const ast = Markdoc.parse(markdownContent);
        const htmlTree = Markdoc.transform(ast);
        const html = Markdoc.renderers.html(htmlTree);
        const template = ['', ''];
        if(isBlog) {
            template[0]="import BlogTemplate from '../BlogTemplate';";
            template[1] ="BlogTemplate";
        } else if (isNews) {
            template[0] ="import NewsTemplate from '../NewsCode/NewsTemplate';";
            template[1] ="NewsTemplate";
        } else if (isResources) {
            template[0] = "import ResourceTemplate from '../ ResourceTemplate';";
            template[1] = "ResourceTemplate";
        }

        setHtmlContent(html);

        setFinalCode(`
${template[0]}
import styles from "../../content.module.css";
import Img from "../../components/Html.jsx/Img";

const ${fileName} = () => {
  return (
      <${template[1]}
          title={"${title}"}
          description={"${description}"}
          date={"${date}"}
          tags={["${tag1}", "${tag2}"]}
          link={"${slugUrl}"}
          image={"${imageName}"}
          content={
              <section className={styles.content}>
                  <Img name="${imageName}" describe={"${title}"} />
                  ${htmlContent} 
              </section>
          }
      />
  )
};

export default ${fileName};
`);
    };

    
    return (
        <main className='mx-6 my-5'>
            <div className='flex flex-col gap-4 min-w-2xl max-w-2xl mb-6'>
                <div>
                    <h2 className='text-xl text-indigo-400 font-sans italic font-bold inline'>Date</h2><input value={date}
                        onChange={(e) => setDate(e.target.value)} className='ml-4 bg-slate-800 text-slate-300 outline-0 border-2 border-slate-500 rounded-lg px-4 py-2' type="date" id="" />
                </div>
                <div>
                    <h2 className='text-xl text-indigo-400 font-sans italic font-bold inline'>File Name</h2><input value={fileName}
                        onChange={(e) => setFileName(e.target.value)} placeholder='BankniftyAnalysis' className='ml-4 bg-slate-800 text-slate-300 outline-0 border-2 border-slate-500 rounded-lg px-4 py-2' type="text" id="" />
                </div>
                <div>
                    <h2 className='text-xl text-indigo-400 font-sans italic font-bold inline'>Slug Url</h2><input value={slugUrl}
                        onChange={(e) => setSlugUrl(e.target.value)} placeholder='banknifty-analysis' className='ml-4 bg-slate-800 text-slate-300 outline-0 border-2 border-slate-500 rounded-lg px-4 py-2' type="text" id="" />
                </div>
                <div>
                    <h2 className='text-xl text-indigo-400 font-sans italic font-bold mb-2'>Type</h2>
                    <div className='flex gap-2 text-lg'>
                        <input
                            type='checkbox'
                            id="blog"
                            checked={isBlog}
                            onChange={(e) => setIsBlog(e.target.checked)}
                        />
                        <label htmlFor="blog">Blog</label>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        <input
                            type='checkbox'
                            id="resources"
                            checked={isResources}
                            onChange={(e) => setIsResources(e.target.checked)}
                        />
                        <label htmlFor="resources">Resources</label>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        <input
                            type='checkbox'
                            id="news"
                            checked={isNews}
                            onChange={(e) => setIsNews(e.target.checked)}
                        />
                        <label htmlFor="news">News</label>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        <input
                            type='checkbox'
                            id="stocks"
                            checked={isStocks}
                            onChange={(e) => setIsStocks(e.target.checked)}
                        />
                        <label htmlFor="stocks">Stocks</label>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl text-indigo-400 font-sans italic font-bold inline'>Image Name</h2><input value={imageName}
                        onChange={(e) => setImageName(e.target.value)} placeholder='banknifty-analysis.png' className='ml-4 bg-slate-800 text-slate-300 outline-0 border-2 border-slate-500 rounded-lg px-4 py-2' type="text" />
                </div>
                <div>
                    <h2 className='text-xl text-indigo-400 font-sans italic font-bold mb-3'>Tags</h2>
                    <input value={tag1}
                        onChange={(e) => setTag1(e.target.value)} placeholder='Investment' className=' bg-slate-800 text-slate-300 outline-0 border-2 border-slate-500 rounded-lg px-4 py-2' type="text" />
                    <br /><br />
                    <input value={tag2}
                        onChange={(e) => setTag2(e.target.value)} placeholder='Analysis' className=' bg-slate-800 text-slate-300 outline-0 border-2 border-slate-500 rounded-lg px-4 py-2' type="text" />
                </div>
            </div>
            <div className='border border-indigo-400 mb-10 mt-8 w-11/12 max-w-2xl'></div>
            <h2 className='text-xl text-indigo-400 font-sans italic font-bold'>Title</h2>
            <textarea
                value={title}
                onChange={(e) => setTitle(e.target.value)} rows={2} className='w-11/12 max-w-2xl my-4 rounded-lg px-4 py-3 text-justify text-lg bg-slate-800 text-slate-300 outline-0 border-2 border-slate-500 hover:border-slate-400 font-sans' />
            <h2 className='text-xl text-indigo-400 font-sans italic font-bold'>Description</h2>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)} rows={4} className='w-11/12 max-w-2xl my-4 rounded-lg px-4 py-3 text-justify text-lg bg-slate-800 text-slate-300 outline-0 border-2 border-slate-500 hover:border-slate-400 font-sans' />
            <h2 className='text-xl text-indigo-400 font-sans italic font-bold'>Body</h2>
            <textarea
                value={markdownContent}
                onChange={handleMarkdownChange}
                placeholder="Enter Content text here..."
                rows={20}
                className='w-11/12 max-w-2xl my-4 rounded-lg px-4 py-3 text-justify text-lg bg-slate-800 text-slate-300 outline-0 border-2 border-slate-500 hover:border-slate-400 font-sans' />
            <br />
            <button onClick={handleConvertClick} className='py-2 px-4 text-shadow rounded duration-200 bg-slate-800 hover:bg-slate-700 hover:text-slate-300 active:bg-slate-600 active:text-slate-300 border border-slate-700 flex gap-2'><span className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
            </svg> </span>Convert</button>
            <div className='border border-indigo-400 mb-10 mt-8 w-11/12 max-w-2xl'></div>
            <pre className='mt-5 overflow-x-auto my-4 rounded-lg px-4 py-3 text-justify text-base bg-slate-800 text-slate-300 outline-0 border-2 border-slate-500 font-code'>{finalCode}</pre>
        </main>
    );
}

export default Content;

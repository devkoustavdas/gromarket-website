import PropTypes from 'prop-types';
import React, { lazy, Suspense } from "react";
import { siteLink } from '../../siteLink';

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
} from "react-share";

const Share = ({ title, link, description }) => {
    const pglink = `${siteLink}/${link}`;
    const text = `${title} - ${description}`;
    const wptext = `*${title}* - _${description}_`;
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <section className='border-l-2 border-teal-500 pb-2'
                style={{
                    margin: "10px 0px",
                    lineHeight: "30px",
                    paddingLeft: "10px",
                    width: "max-content",
                }}
            >
                <div>Share This Article via</div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "left",
                        columnGap: "10px",
                    }}
                >
                    <FacebookShareButton url={pglink} title={text}>
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={pglink} title={text}>
                        <XIcon size={32} round />
                    </TwitterShareButton>
                    <TelegramShareButton url={pglink} title={text}>
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <WhatsappShareButton url={pglink} title={wptext} separator=": ">
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        url={pglink}
                        source="GroMarket"
                        summary={text}
                    >
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <PinterestShareButton url={String(window.location)}>
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
                    <EmailShareButton
                        url={pglink}
                        subject={text}
                        body={description}
                    >
                        <EmailIcon size={32} round />
                    </EmailShareButton>
                </div>
            </section>
        </React.Suspense>
    );
};
Share.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string
};
export default Share;

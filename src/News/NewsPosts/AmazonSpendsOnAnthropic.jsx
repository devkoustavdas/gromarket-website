import NewsTemplate from '../NewsCode/NewsTemplate';
import Img from "../../components/Html.jsx/Img";
import styles from "../../content.module.css";

const AmazonSpendsOnAnthropic = () => {
  return (
      <NewsTemplate
          title="Amazon spends $2.75 billion on AI startup Anthropic in its largest venture investment yet"
          description={"Tech giant Amazon spends $2.75 billion on American artificial intelligence (AI) startup Anthropic (developer of Claude) in its largest venture investment yet"}
          date={"27/03/2024"}
          tags={["Corporate Finance", "Investment"]}
          link={"amazon-spends-2point7b-on-startup-anthropic-in-largest-venture-investment"}
          content={
              <section className={styles.content}>
                  <Img name="Amazon spends $2.75 billion on AI startup Anthropic.png" describe={"Amazon spends $2.75 billion on AI startup Anthropic (developer of Claude)"} />
                  <blockquote>
                      <p>Amazon Bets $4 Billion on AI Startup Anthropic</p>
                  </blockquote>
                  <p>In one of the largest corporate venture deals ever, Amazon is doubling down on artificial intelligence with a massive <strong><em>$4 billion investment</em></strong> in <strong><em>Anthropic</em></strong>, a <em>buzzy AI startup</em>. The latest $2.75 billion tranche brings Amazon&#39;s total funding for the San Francisco company to the multi-billion dollar commitment.</p>
                  <p>The deal underscores the hyper-competition around generative AI, an emerging technology that can generate human-like text, images, and other content from training data. Anthropic&#39;s standout product is Claude, a powerful language model competing directly with OpenAI&#39;s vaunted ChatGPT.</p>
                  <p>By the Numbers:</p>
                  <ul>
                      <li><strong>$18.4 billion</strong> - Anthropic&#39;s valuation as of this deal</li>
                      <li><p><strong>$7.3 billion</strong> - Total funding raised by Anthropic over the past year across 5 rounds</p>
                      </li>
                      <li><p><strong>$29.1 billion</strong> - Record amount invested in generative AI startups in 2023 so far</p>
                      </li>
                      <li><strong>700</strong> - Number of generative AI deals in 2023 to date</li>
                      <li><strong>92%</strong> - Percentage of Fortune 500 companies using OpenAI&#39;s ChatGPT</li>
                  </ul>
                  <p>Amazon is securing a <em>minority stake and no board seat</em> in the AI startup. But the e-commerce giant is the lead investor and Anthropic will use Amazon Web Services as its primary cloud provider going forward. Anthropic will also leverage Amazon&#39;s in-house AI chips to build and run its foundation models.</p>
                  <p>The partnership aims to boost Amazon&#39;s customer offerings with Anthropic&#39;s cutting-edge AI across AWS, Alexa, and its core retail business. It also prevents rivals like Microsoft (OpenAI&#39;s primary backer) and Google (an Anthropic investor itself) from exclusively controlling key generative AI tech.</p>
                  <p><em>Anthropic&#39;s new Claude 3 model suite claims to outperform OpenAI&#39;s viral GPT-4 on benchmarks</em>. But safety challenges remain, with potential risks around biased outputs and factual inaccuracies still being ironed out.</p>
                  <p>As regulators start scrutinizing these lucrative AI investments and cloud deals, Amazon and its Big Tech peers are locked in an AI arms race that will reshape the tech landscape for decades to come.</p>
              </section>
          }
      />
  )
};

export default AmazonSpendsOnAnthropic;

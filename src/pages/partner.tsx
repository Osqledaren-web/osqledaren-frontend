import React, { FunctionComponent } from "react";
import Layout from "../organisms/Layout";
import H from "../atoms/H";
import P from "../atoms/P";
import styled from "../styles/styled";
import InfoWrapper from "../molecules/InfoWrapper";
import Backside from "../images/baksida.png";
import HalfPage from "../images/halvsida.png";
import WholePage from "../images/helsida.png";
import QuarterPage from "../images/kvart.png";
import Helmet from "react-helmet";

const Advertise: FunctionComponent = () => (
  <Layout>
    <Helmet>
      <title>Advertise - Osqledaren</title>
    </Helmet>
    <InfoWrapper>
      <AdvertiseContainer>
        <Infotext>
          <About>
            <H variant="3">Annonsera</H>
            <P>
              Med sin upplaga på ca 10 000 ex är Osqledaren Sveriges största
              tekniska studenttidning. Tidningen är helt annonsfinansierad och
              skickas kostnadsfritt hem till alla kårmedlemmar vid Kungliga
              tekniska högskolan (KTH) i Stockholm fyra gånger per läsår.
              Osqledaren är det bästa sättet att nå studenter på KTH. Osqledaren
              drivs ideellt av studenter under ledning av en heltidsarvoderad
              chefredaktör (tillika ansvarig utgivare).
            </P>
            <P>
              Tillsammans skriver vi om det som händer på KTH, studentkåren,
              nöje, teknik, arbetsmarknad och annat som intresserar studenterna.
              Ambitionerna är höga både vad gäller det redaktionella innehållet
              såväl som produktionen. Osqledaren är ett utmärkt
              annonseringsalternativ för er som vill nå KTH-studenter eftersom
              vi kommunicerar med framtidens KTHingenjörer på ett naturligt och
              välbekant sätt, regelbundet och i stor volym.{" "}
            </P>
          </About>
          <Contact>
            <H variant="3">Kontakt</H>
            <P>
              Vill ni annonsera i Osqledaren? <br></br>
              <b>
                Skriva till oss på: <br></br>
                <a href="mailto:osqledaren@ths.kth.se">
                  osqledaren@ths.kth.se
                </a>{" "}
              </b>
            </P>
          </Contact>
        </Infotext>

        <Physical>
          <H variant="3">Annons i fysisk tidning</H>
          <P>
            <li>Tryckteknik: Fyrafärgs CMYK.</li>
            <li>Upplösning: 300 dpi</li>
            <li>Utfall: 3mm</li>
            <li>Inlaga: 100g TF Obestruket Offset</li>
            <li>Omslag: 250g TF Obestruket Offset</li>
          </P>

          <Sections>
            <Section>
              <H variant="4">Baksida</H>
              <SectionContent>
                <img src={Backside}></img>
                <P size="18">
                  Mått: 180 x 200 mm <br />
                  <b>25 000 kr</b>
                </P>
              </SectionContent>
            </Section>
            <Section>
              <H variant="4">Halvsida</H>
              <SectionContent>
                <img src={HalfPage}></img>
                <P size="18">
                  Liggande: 208 x 135 mm <br /> Stående: 104 x 270 mm <br />
                  <b>10 000 kr</b>
                </P>
              </SectionContent>
            </Section>
            <Section>
              <H variant="4">Helsida</H>
              <SectionContent>
                <img src={WholePage}></img>
                <P size="18">
                  Mått: 208 x 270 mm <br />
                  <b>18 000 kr</b>
                </P>
              </SectionContent>
            </Section>
            <Section>
              <H variant="4">Kvartssida</H>
              <SectionContent>
                <img src={QuarterPage}></img>
                <P size="18">
                  Stående: 104 x 135 mm <br />
                  <b>6 000 kr</b>
                </P>
              </SectionContent>
            </Section>
          </Sections>
        </Physical>
        <Plan>
          <H variant="3">Utgivningsplan 2023/2024</H>
          <Dates>
            <Date>
              <H variant="4">Utgåva 1</H>
              <P size="17" lh="22">
                Säljstopp 10/10/23 {<br />} Utgivning 06/11/23
              </P>
            </Date>
            <Date>
              <H variant="4">Utgåva 2</H>
              <P size="17" lh="22">
                Säljstopp 07/12/23 {<br />} Utgivning 08/01/24
              </P>
            </Date>
            <Date>
              <H variant="4">Utgåva 3</H>
              <P size="17" lh="22">
                Säljstopp 23/02/24 {<br />} Utgivning 22/03/24
              </P>
            </Date>
            <Date>
              <H variant="4">Utgåva 4</H>
              <P size="17" lh="22">
                Säljstopp 26/04/24 {<br />} Utgivning 24/05/24
              </P>
            </Date>
          </Dates>
        </Plan>
      </AdvertiseContainer>
    </InfoWrapper>
  </Layout>
);

export default Advertise;

const AdvertiseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background-color: white;
  padding: 5%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + "px"}) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`;

const Infotext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid lightgray 1px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl + "px"}) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`;

const About = styled.div`
  width: 60%;
  max-width: 1000px;
  margin-right: 4vw;
`;

const Plan = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const Dates = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Date = styled.div`
  min-width: 150px;
  margin-right: 10px;
`;

const Physical = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const Sections = styled(Dates)`
  display: flex;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + "px"}) {
    flex-direction: column;
  }
`;
const Section = styled.div`
  width: 50%;
  margin-top: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + "px"}) {
    width: 100%;
    margin-right: 5px;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  > img {
    width: 60%;
    height: 100%;
    margin-right: 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + "px"}) {
    flex-direction: row;
    width: 100%;
    > img {
      width: 30%;
    }
  }
`;

const Contact = styled.div`
  margin-top: 20px;
`;

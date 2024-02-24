import { useState } from 'react';
import styled, { css } from 'styled-components';

import { Container, H1, Item, Paragraph, Section } from '../components';
import { breakpoints } from '../helpers';
import { usePageContext } from '../renderer/usePageContext';

interface QuestionProps {
  question: string;
  answer: string;
}

// Define types
interface QUESTIONS {
  [key: string]: Array<{
    question: string;
    answer: string;
  }>;
}

const QUESTIONS: QUESTIONS = {
  en: [
    {
      question: 'What this initiative is about and who are we supporting?',
      answer:
        'This initiative is targeted to support our BigCommerce colleagues who are fighting for the freedom of Ukraine as a part of the Ukrainian Armed Forces.',
    },
    {
      question: 'What is the target amount of donations we want to aim for?',
      answer:
        'Our goal is to be able to gather at least $6,000 every month to be able to provide constant support for our colleagues on a frontline.  We are planning to buy transport, protection and medical supplies on a regular basis.  We always aim for more, so the more donations we are able to collect the more help we will be able to provide.',
    },
    {
      question: 'How long do we think this initiative would last?',
      answer:
        'We are planning to support our colleagues as long as the war is going up to the victory day. Or up to the time when they are going to discontinue their service. Subscription is 100% optional and you can unsubscribe any time by reach out to us via contact us form or by clicking <a href="https://docs.google.com/forms/d/e/1FAIpQLScF3VX6Q1GctTWHBzCdKQllsTISdutgT-8KDU3OKySgRbHzBA/viewform">here</a>.',
    },
    {
      question:
        'In case if the amount of donations is more than the needs, how those funds are going to be used?',
      answer:
        'BigCommerce Ukraine is providing help not only to our colleagues defending Ukraine in the Armed Forces, but also to help in rebuilding civilian infrastructure damaged as a cause of russian aggression, as well as helping kids who suffered from this aggression.<br>' +
        'In case there are any funds left on top of what we need to support our colleagues, those funds would be used to help in rebuilding civilian infrastructure and helping kids and families in need.',
    },
    {
      question: 'How to track how the funds are being used?',
      answer:
        'We are posting monthly updates in internal #kyiv slack channel. Please join to be up to date with how your support is being used.',
    },
    {
      question: 'Who can join this initiative and donate?',
      answer:
        'At this point we are opening up this donation options for all our colleagues at BigCommerce in Ukraine, US, UK, Mexico, Australia and EU.',
    },
    {
      question: 'Can I make a one time payment directly to the charity org account?',
      answer:
        'Yes, you can make one time donation using the One time donation options near the subscription options or use the following bank account:<br>' +
        'Charity Org “United Ukrainian Support”<br>' +
        'IBAN: UA373052990000026009036803457<br>' +
        'JSC CB "PRIVATBANK"<br>',
    },
  ],
  'uk-UA': [
    {
      question: 'На кого націлений цей проект і куди підуть кошти?',
      answer:
        'Цей проект має на меті допомогу нашим колегам з компанії “БігКоммерс Україна”, які після 24 лютого 2022 року доєднались до захисту України в лавах Збройних Сил.',
    },
    {
      question: 'Яка цільова сума збору?',
      answer:
        'Наша мета мати змогу швидко і прогрозовано закривати потреби наших колег, які захищають Україну в лавах ЗСУ. Для цієї мені нам потрібно мати змогу щомісячно збирати від 220 000 грн для швидкої закупівлі транспортних засобів, засобів РЕБ, дронів, засобів зв’язку, генераторів і медичних товарів. Цільова сума в 220 000 грн це мінімум, який дозволить покрити поточні потреби, при цьому ми не обмежуємось цією сумою і, за умови, збору більшої суми будемо розподіляти кошти на покриття додаткових потреб, наприклад щомісячних витрат з обслуговування авто, засобів зв’язку.',
    },
    {
      question: 'Скільки часу триватиме підписка на донати?',
      answer:
        'Ми плануємо підтримувати наших колег до тих пір, допоки це буде необхідно, тобто до закінчення війни або до їх звільнення з лав Збройних Сил України. Цей проект дає змогу допомоги на добровільній основі, тому відмовитись від підтримки можна в будь який момент відправивши запит через <a href="https://forms.gle/gENoxXGFx1EPNokR6">цю форму</a>.',
    },
    {
      question: 'Що буде з залишками коштів, у разі якщо зібрана сума перевищує поточні потреби?',
      answer:
        'Компанія “БігКоммерс Україна” допомагає не тільки нашим колегам в складі Збройних Сил України, але також реалізовує інші благодійні ініціативи з допомоги у відбудові цивільної інфраструктури, а також щодо допомоги дітям, які постраждали від наслідків збройної агресії росіїї проти України. У разі, якщо на рахунку благодійного фонду буде надлишок коштів – ці кошти будуть витрачені на благодійні ініціативи з допомоги у відбудові цивільної інфраструктури або на допомогу дітям постраждалим від війни.',
    },
    {
      question: 'Як отримати звіт про те, на що були витрачені кошти?',
      answer:
        'Ми публікуємо регулярні щомісячні звіти про усі купівлі у внутрішньому чаті компанії. Кожен бажаючий може долучитись до каналу #kyiv у внутрішньому мессенджері для перегляду детальної інформації щодо закупівель і зібраних коштів.',
    },
    {
      question: 'Хто може долучитись до підтримки?',
      answer:
        'Наразі ми залучаємо до підтримки наших колег тільки співробітників компанії BigCommerce в Україні, Британії, США, Австралії, Мексиці та країнах ЄС.',
    },
    {
      question: 'Чи можу я зробити одноразовий донат на реквізити фонду?',
      answer:
        'Так, одноразовий донат можна зробити скориставшись опцією поруч з підпискою або за реквізитами фонду:<br>БФ “ОБ’ЄДНАНА УКРАЇНСЬКА ПІДТРИМКА”<br></br>' +
        'р/р: UA373052990000026009036803457 <br>' +
        'АТ КБ "ПРИВАТБАНК" <br>' +
        'МФО 305299 <br>' +
        'ЄДРПОУ 44726193',
    },
  ],
};

const StyledQuestion = styled.div`
  border-top: 1px solid #d1d7e0;

  &:last-of-type {
    border-bottom: 1px solid #d1d7e0;
  }
`;

const StyledAction = styled.button<{ isActive: boolean }>`
  border: 0;
  color: #121118;
  cursor: pointer;
  display: block;
  background-color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  padding: 2rem 4rem 2rem 2rem;
  position: relative;
  text-align: left;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 1rem;
    border-top: 0.5rem solid currentColor;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    top: 4rem;
    right: 2rem;
    transform-origin: 50% 0.25rem;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #edeff3;

      &::after {
        transform: rotate(180deg);
      }
    `}

  &:hover {
    background-color: #edeff3;
  }

  ${breakpoints.desktop} {
    font-size: 2rem;
    padding: 3rem 5rem 3rem 3rem;

    &::after {
      right: 3rem;
    }
  }
`;

const StyledAnswer = styled.div`
  padding: 2rem;

  ${breakpoints.desktop} {
    padding: 3rem;
  }
`;

const StyledH1 = styled(H1)`
  margin-bottom: 3rem;

  ${breakpoints.desktop} {
    margin-bottom: 6rem;
  }
`;

const Question = ({ question, answer }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledQuestion>
      <StyledAction isActive={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {question}
      </StyledAction>
      {isOpen && (
        <StyledAnswer>
          <Paragraph margin="0" weight={300}>
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </Paragraph>
        </StyledAnswer>
      )}
    </StyledQuestion>
  );
};

export const Faq = () => {
  const { locale } = usePageContext();

  return (
    <Section id="faq">
      <StyledH1 margin="0 0 6rem" textAlign="center">
        FAQ
      </StyledH1>
      <Container>
        <Item flexGrow={1}>
          {(QUESTIONS[locale] || QUESTIONS.en).map((qa, key) => (
            <Question key={key} {...qa} />
          ))}
        </Item>
      </Container>
    </Section>
  );
};

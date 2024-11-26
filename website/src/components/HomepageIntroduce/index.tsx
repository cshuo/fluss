/*
 * Copyright (c) 2024 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type IntroduceItem = {
  title: string;
  description: JSX.Element;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
};

const IntroduceList: IntroduceItem[] = [
  {
    title: 'What is Fluss?',
    description: (
      <>
        Fluss is a streaming storage designed for real-time analytics which can serve as the real-time data layer on Lakehouse. With its columnar stream and real-time update capabilities, Fluss is deeply integrated with Flink to build high-throughput, low-latency, cost-effective streaming data warehouses for real-time applications.
      </>
    ),
    image: require('@site/static/img/fluss.png').default,
  }
];


function Introduce({title, description, image}: IntroduceItem) {
  return (
    <div className={clsx('col col--8')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h1">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <img src={image} />
      </div>
    </div>
  );
}

export default function HomepageIntroduce(): JSX.Element {
  return (
    <section className={styles.introduce}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--2')}></div>
          {IntroduceList.map((props, idx) => (
            <Introduce key={idx} {...props} />
          ))}
          <div className={clsx('col col--2')}></div>
        </div>
      </div>
    </section>
  );
}
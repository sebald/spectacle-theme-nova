import React from 'react';
import {
  Slide, Appear,
  Layout, Fill, Fit,
  Heading, Text, Link, S, Markdown,
  List, ListItem,
  Table,  TableItem, TableHeaderItem, TableRow,
  BlockQuote, Quote, Cite,
  Code, CodePane,
  Image
} from 'spectacle';
import render, { Presentation } from 'melodrama';
import createTheme from '../index.js';

// Syntax
// ---------------
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
/* Custom Nova syntax highlighting */
import '../syntax/prism.nova.css';
import '../syntax/prism-javascript';
import '../syntax/prism-typescript';


// Config
// ---------------
// <S> has bug, see https://github.com/FormidableLabs/spectacle/pull/238
const inline = { display:'inline', margin:0 };
const gutter = '25px';
const images = {
  pug: require('./assets/745px-Carl_Reichert_Mops.jpg'),
  nyan: require('./assets/nyancat.gif')
};



// Presentation
// ---------------
const Root = () => (
  <Presentation theme={createTheme('nova')}>
    <Slide>
      <Heading size={1} fit>Hello!</Heading>
      <Heading size={3}>Nova theme for Spectacle</Heading>
      <Text>
        <Link href="https://github.com/sebald/spectacle-theme-nova">
          View on Github
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Heading size={1}>H1</Heading>
      <Heading size={2}>H2</Heading>
      <Heading size={3}>H3</Heading>
      <Heading size={4}>H4</Heading>
    </Slide>
    <Slide>
      <Markdown>{`HTTP as API. Grunt is a language. The only difference is that the *revealing module pattern* was engineered as a way to ensure that all methods and variables are kept private until they are acceptable before being submitted to the D3. [Broccoli](https://en.wikipedia.org/wiki/Broccoli) is a lightweight data-interchange format. Isomorphic is an application is said to be universal isomorphic when its code can run both in the ECMAScript language specification. It allows you to write powerful and flexible code with its elegant, well documented, and coherent APIs.`}</Markdown>
    </Slide>
    <Slide>
      <Text>Some text that is styled with <S type="strikethrough">strikethrough</S>.</Text>
      <Text>🐙</Text>
      <Text style={inline} textColor="cyan">All </Text>
      <Text style={inline} textColor="blue">Nova </Text>
      <Text style={inline} textColor="purple">theme </Text>
      <Text style={inline} textColor="pink">colors </Text>
      <Text style={inline} textColor="red">are </Text>
      <Text style={inline} textColor="orange">available </Text>
      <Text style={inline} textColor="yellow">here </Text>
      <Text style={inline} textColor="green">! </Text>
      <Text>🐳</Text>
      <Text style={inline} textColor="gray0">This </Text>
      <Text style={inline} textColor="gray1">is </Text>
      <Text style={inline} textColor="gray2">also </Text>
      <Text style={inline} textColor="gray3">true </Text>
      <Text style={inline} textColor="gray4">for </Text>
      <Text style={inline} textColor="gray5">gray </Text>
      <Text style={inline} textColor="gray6">! </Text>
    </Slide>
    <Slide>
      <BlockQuote>
        <Quote>Falling in love with code means falling in love with problem solving and being a part of a forever ongoing conversation.</Quote>
        <Cite>Kathryn Barrett</Cite>
      </BlockQuote>
    </Slide>
    <Slide>
      <Heading size={2}>A wild List appears...</Heading>
      <List>
        <Appear><ListItem>One</ListItem></Appear>
        <Appear><ListItem>Two</ListItem></Appear>
        <Appear><ListItem>Three</ListItem></Appear>
      </List>
    </Slide>
    <Slide>
      <Heading size={2}>Table</Heading>
      <Table>
        <tbody>
        <TableRow>
          <TableHeaderItem>First</TableHeaderItem>
          <TableHeaderItem>Second</TableHeaderItem>
        </TableRow>
        <TableRow>
          <TableItem>This is an item</TableItem>
          <TableItem>This too</TableItem>
        </TableRow>
        <TableRow>
          <TableItem>This is the next item</TableItem>
          <TableItem>Seems like I am the last one...</TableItem>
        </TableRow>
        </tbody>
      </Table>
    </Slide>
    <Slide>
      <Image src={images.pug} height="500px"/>
      <Text>
        <Link href="https://commons.wikimedia.org/wiki/File:Carl_Reichert_Mops.jpg">A Pug by Carl Reichert (1836-1918)</Link>
      </Text>
    </Slide>
    <Slide bgImage={images.nyan}></Slide>
    <Slide>
      <Heading>Columns</Heading>
      <Layout>
        <Fill>
          <Text margin={`0 ${gutter} 0 0`} textAlign="left">
            JSON for Linked Data. Ionic is a realtime MVC Framework for Node. JavaScript language that compiles into JavaScript. Express is a JavaScript library for JavaScript programmers. MVC Framework for Node.
          </Text>
        </Fill>
        <Fill>
          <Text margin={`0 0 0 ${gutter}`} textAlign="left">
            Applications such as PDF documents, site-specific browsers, and desktop widgets. JavaScript developer. MongoDB, ExpressJS, AngularJS, and Node. JavaScript code linter. Patterns is a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser without the use of JavaScript for server-side Web applications.
          </Text>
        </Fill>
      </Layout>
    </Slide>
    <Slide>
      <Heading>Fitting</Heading>
      <Layout>
        <Fit>
          <Image src={images.pug} height="300px" margin="0 2rem 0 0"/>
        </Fit>
        <Fill>
          <List>
            <ListItem>One</ListItem>
            <ListItem>Two</ListItem>
            <ListItem>Three</ListItem>
          </List>
        </Fill>
      </Layout>
    </Slide>
    <Slide>
      <CodePane
        lang="typescript"
        source={require('raw!./assets/example.ts')}
      ></CodePane>
    </Slide>
    <Slide>
      <Text>Some text that das inline <Code>code</Code>!</Text>
      <Text>This <Code>global</Code> is another piece of inline code!</Text>
    </Slide>
  </Presentation>
);

render(Root, images);
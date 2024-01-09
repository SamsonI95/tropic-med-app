import * as React from "react";
import { AccordionData } from "./AccordionData";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionToggleEventHandler,
} from "@fluentui/react-components";

function Accordion () {
    
    return (
        <Accordion>
          {AccordionData.map((item, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionHeader>
                {item.question}
              </AccordionHeader>
              <AccordionPanel>
                <div>{item.answer}</div>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
    )
}


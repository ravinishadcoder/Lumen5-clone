import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";

import styles from "./PriceTable.module.css";
import { CheckIcon } from "@chakra-ui/icons";

const PriceTable = () => {
  return (
    <>
      <div className={styles.tableHead}>
        

        <TableContainer>
          <Table variant="" colorScheme="#fafafb">
            <Thead>
            <Tr>
                <Td>
                  <Text fontSize="2xl" fontWeight="bold">
                  Usages
                  </Text>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>Videos per month</Th>
                <Th>Unlimited</Th>
                <Th>Unlimited</Th>
                <Th>Unlimited</Th>
                <Th>Unlimited</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Saved templates</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>3</Td>
                <Td>Custom</Td>
              </Tr>
              <Tr>
                <Td>Workspace</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>3</Td>
                <Td>Custom</Td>
              </Tr>
              <Tr>
                <Td>Instant videos</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>10</Td>
                <Td>Custom</Td>
              </Tr>
              <Tr>
                <Td>Team members</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>1</Td>
                <Td>Custom</Td>
              </Tr>
              <Tr>
                <Td>Brand kits</Td>
                <Td>0</Td>
                <Td>1</Td>
                <Td>3</Td>
                <Td>Custom</Td>
              </Tr>
              <Tr>
                <Td>Translations</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        

        <TableContainer>
          <Table variant="" colorScheme="#fafafb">
            <Thead>
            <Tr>
                <Td>
                  <Text fontSize="2xl" fontWeight="bold">
                  Rendering
                  </Text>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Th>Resolution</Th>
                <Th>720p</Th>
                <Th>1080p</Th>
                <Th>1080p</Th>
                <Th>1080p</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Landscape</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Square</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Vertical</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              {/* Branding */}
              <Tr>
                <Td>
                  <Text fontSize="2xl" fontWeight="bold">
                    Branding
                  </Text>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Branded outro</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Popular templates</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Custom outro</Td>
                <Td>-</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Custom fonts</Td>
                <Td>-</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Custom colors</Td>
                <Td>-</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Watermark upload</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Upload your own fonts</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Custom templates</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              {/* Media */}
              <Tr>
                <Td>
                  <Text fontSize="2xl" fontWeight="bold">
                    Media
                  </Text>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Millions of free-to-use videos and images</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Upload your own videos & photos</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Upload your own audio tracks</Td>
                <Td>
                <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Unlimited premium media</Td>
                <Td>
               -
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Exclusive media marketplace</Td>
                <Td>-</Td>
                <Td>
                  -
                </Td>
                <Td>
                  25/month
                </Td>
                <Td>
                  Custom
                </Td>
              </Tr>
              <Tr>
                <Td>Record your own voiceover</Td>
                <Td>
                <CheckIcon color="green"/>
                </Td>
                <Td>
                <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Icons</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Upload your own custom icons</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>-</Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              {/* Team management */}
              <Tr>
                <Td>
                  <Text fontSize="2xl" fontWeight="bold">
                  Team management
                  </Text>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Brand management</Td>
                <Td>
                  -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Team permissions</Td>
                <Td>
                  -
                </Td>
                <Td>
                 -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Workspace management</Td>
                <Td>
               -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Two-factor authentication</Td>
                <Td>
               -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                 -
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Single sign-on</Td>
                <Td>-</Td>
                <Td>
                  -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                <CheckIcon color="green"/>
                </Td>
              </Tr>
              {/* Support */}
              <Tr>
                <Td>
                  <Text fontSize="2xl" fontWeight="bold">
                  Support
                  </Text>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Help center access</Td>
                <Td>
                <CheckIcon color="green"/>
                </Td>
                <Td>
                <CheckIcon color="green"/>
                </Td>
                <Td>
                <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Email support</Td>
                <Td>
                  -
                </Td>
                <Td>
                <CheckIcon color="green"/>
                </Td>
                <Td>
                <CheckIcon color="green"/>
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Customized support</Td>
                <Td>
               -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Invoiced billing</Td>
                <Td>
               -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                 -
                </Td>
                <Td>
                  <CheckIcon color="green"/>
                </Td>
              </Tr>
              <Tr>
                <Td>Single sign-on</Td>
                <Td>-</Td>
                <Td>
                  -
                </Td>
                <Td>
                  -
                </Td>
                <Td>
                <CheckIcon color="green"/>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default PriceTable;

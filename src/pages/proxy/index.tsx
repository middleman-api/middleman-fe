import { Card } from "@/components/ds";
import PageHeader from "@/components/PageHeader";
import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Icon,
  IconButton,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Proxy = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([
    {
      id: 1,
      method: "GET",
      status: 200,
      host: "https://example.com",
      path: "/api/get",
      duration: "220ms",
      headers: {},
      body: {},
      response: {},
    },
    {
      id: 2,
      method: "POST",
      status: 400,
      host: "https://example.com",
      path: "/api/get",
      duration: "220ms",
      headers: {},
      body: {},
      response: {},
    },
  ]);
  const [expandedRow, setExpandedRow] = useState<typeof data[0] | undefined>(
    undefined
  );

  const handleExpand = (row: typeof data[0]) => {
    setExpandedRow(row);
  };

  return (
    <Box>
      <PageHeader
        title={searchParams.get("title") || undefined}
        subTitle={
          "All requests from {endpointURL} will be proxied to {proxyURL} and can be monitored below."
        }
        actions={[
          <Button key={1} rightIcon={<EditIcon />}>
            Edit
          </Button>,
        ]}
      />
      <Card>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Method</Th>
                <Th>URL</Th>
                <Th>Status Code</Th>
                <Th>Duration</Th>
                <Th isNumeric>
                  <Button size={"sm"} variant={"outline"} colorScheme={"red"}>
                    Clear All
                  </Button>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((row) => (
                <Tr key={row.id}>
                  <Td>{row.method}</Td>
                  <Td>{row.host}</Td>
                  <Td>{row.status}</Td>
                  <Td>{row.duration}</Td>
                  <Td isNumeric>
                    <Button
                      onClick={() => handleExpand(row)}
                      size={"sm"}
                      bg={"gray.100"}
                      aria-label="go back"
                      rightIcon={
                        <Icon
                          as={ChevronRightIcon}
                          boxSize={"20px"}
                          mr={"-2px"}
                        />
                      }
                      rounded={"50px"}
                    >
                      Expand
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
      <Drawer
        placement={"bottom"}
        onClose={() => setExpandedRow(undefined)}
        isOpen={!!expandedRow}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Expand view</DrawerHeader>
          <DrawerBody>
            <pre>{JSON.stringify(expandedRow, null, 4)}</pre>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Proxy;

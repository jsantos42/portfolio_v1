import {projects} from "../data";
import Card from "../components/Card";

const CardArray = projects.map(i => <Card key={i.title}
                                          title={i.title}
                                          static={i.static}
                                          gif={i.gif}
                                          brief={i.brief}
                                          languages={i.languages}
                                          keywords={i.keywords}
                                          repo={i.repo}
                                          live={i.live}
                                          description={i.description}
/>);

export default CardArray;
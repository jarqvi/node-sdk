import * as fs from 'fs-extra';
import * as YAML from 'yaml';

interface IClass {
    examples: Record<string, string>;
}

interface ISdk {
    classes: Record<string, IClass>;
}

interface ITemplate {
    sdks: Record<string, ISdk>;
}

function readMdFile(filePath: string, method: string, example: string): void {
    const mdFile = fs.readFileSync(filePath, 'utf8');

    const indexMethod = mdFile.indexOf(`# **${method}**`);
    const sectionMethod = mdFile.substring(indexMethod);
    
    const regexMethod = /```([a-zA-Z]*)\n([\s\S]+?)```/;
    const resolveMethod = sectionMethod.replace(regexMethod, '```typescript\n' + example + '\n```');

    const newMdFile = mdFile.replace(sectionMethod, resolveMethod);
    fs.createWriteStream(filePath).write(newMdFile);
}

readMdFile('../../doc/dns/ZoneApi.md', 'getListZones', 'tttttt');

function readTemplate() {
    const templateFile = fs.readFileSync('./template.yml', 'utf8');
    if (templateFile) {
        const template: ITemplate = YAML.parse(templateFile);
        for (const sdk in template.sdks) {
            for (const apiClass in template.sdks[sdk].classes) {
                const mdFile = fs.readFileSync(`../../doc/${sdk}/${apiClass}.md`, 'utf8');

                const jwt = '[jwt](README.md#jwt)';
                const footer = '[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)';
                const examples = template.sdks[sdk].classes[apiClass].examples;

                let newMdFile = mdFile.replaceAll(jwt, '[jwt](../../README.md#jwt)');
                newMdFile = newMdFile.replaceAll(footer, '[[Back to top]](#) [[Back to README]](./../../README.md)');
                newMdFile = newMdFile.replace(`# .${apiClass}`, `# ${apiClass}`);
                fs.createWriteStream(`../../doc/${sdk}/${apiClass}.md`).write(newMdFile);

                // for (const example in examples) {
                    
                // }
            }
        }
    }
}

// readTemplate();
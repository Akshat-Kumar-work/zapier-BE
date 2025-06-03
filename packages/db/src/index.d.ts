declare const prismaClientSingleton: () => any;
declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}
declare const prisma: ReturnType<typeof prismaClientSingleton>;
export default prisma;
//# sourceMappingURL=index.d.ts.map